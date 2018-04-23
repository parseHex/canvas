import * as draw from './draw';
import * as utility from './utility';
import state from './state';

export { setLoop } from './loop';
export { draw };
export { utility };

/**
 * Set the canvas element (and context) that will be used for all future operations.
 */
export function setCanvas(canvas: HTMLCanvasElement) {
	state.canvas = canvas;
	state.ctx = canvas.getContext('2d');
}

/**
 * Set a separate canvas element that will be used for drawing the background (set with the loop).
 * This can help with performance since the background can be draw once on a separate canvas.
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
