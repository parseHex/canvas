import * as draw from './draw';
import * as utility from './utility';
import state from './state';

export type LoopFunction = (currentFrame: number) => void;
export interface LoopOptions {
	loopFunction: LoopFunction;
	timing?: boolean;
	clearEachFrame?: boolean;
	background?: string;
	framerate?: number;
}

let loopFunction: LoopFunction;
let timing: boolean = false;
let clearEachFrame: boolean = false;
let currentFrame: number = -1;
let background: string = 'white';
let backgroundObject: any;
let framerate: number = 1;
let drawnBackground: boolean = false;
let timingStart: number, timingEnd: number, timingResult: number;

/**
 * Set a loop which will be called continuously using `requestAnimationFrame`.
 */
export function setLoop(opts: LoopOptions) {
	loopFunction = opts.loopFunction;
	timing = opts.timing || false;
	clearEachFrame = opts.clearEachFrame || false;
	background = opts.background || 'white';
	framerate = Math.floor(60 / (opts.framerate || 60));

	backgroundObject = {
		x: 0,
		y: 0,
		width: state.canvas.width,
		height: state.canvas.height,
		strokeStyle: 'transparent',
		fillStyle: background,
	};

	if (state.backgroundCanvas) {
		// draw the background on a separate canvas so that it doesn't have to be drawn again
		// FIXME this is pretty hacky; there isn't a way to override which canvas is drawn to,
		//   so set the backgroundCanvas to the canvas, draw, then set it back
		const realCanvas = state.canvas;
		const realCtx = state.ctx;
		state.canvas = state.backgroundCanvas;
		state.ctx = state.backgroundCtx;

		draw.rect(backgroundObject);

		state.canvas = realCanvas;
		state.ctx = realCtx;
		drawnBackground = true;
	}
}

function internalLoop() {
	currentFrame++;

	if (currentFrame % framerate === 0) {
		if (timing) timingStart = performance.now();

		if (clearEachFrame) utility.clear();

		if (!drawnBackground) draw.rect(backgroundObject);

		if (loopFunction) loopFunction(currentFrame);

		if (timing) {
			timingEnd = performance.now();
			timingResult = timingStart - timingStart;

			draw.text({
				x: 5,
				y: state.canvas.height - 5,
				text: `Frame time: ${timingEnd.toFixed(1)}ms`,
			});
		}
	}

	requestAnimationFrame(internalLoop);
}
requestAnimationFrame(internalLoop);
