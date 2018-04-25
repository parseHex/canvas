import * as draw from './draw';
import * as utility from './utility';
import state from './state';
import * as object from './object';

export { setLoop } from './loop';
export { draw, object, utility };

/**
 * Set the canvas element (and context) that will be used for all future operations.
 */
export function setCanvas(canvasEl: HTMLCanvasElement) {
	state.canvas = canvasEl;
	state.ctx = canvasEl.getContext('2d');
}

/**
 * Set a separate canvas element that will be used for drawing the background (set with the loop).
 * This can help with performance since the background can be drawn once on a separate canvas.
 *
 * Be sure to set this before adding a loop.
 */
export function setBackgroundCanvas(canvas: HTMLCanvasElement) {
	state.backgroundCanvas = canvas;
	state.backgroundCtx = canvas.getContext('2d');
}

/**
 * Get the canvas's context.
 */
export function getContext() {
	return state.ctx;
}
