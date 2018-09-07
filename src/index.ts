import * as draw from './draw';
import * as utility from './utility';
import state from './state';
import * as object from './object';
import { setLoop } from './loop';

/**
 * Set the canvas element (and context) that will be used for all future operations.
 */
function setCanvas(canvasEl: HTMLCanvasElement) {
	state.canvas = canvasEl;
	state.ctx = canvasEl.getContext('2d');
}

/**
 * Set a separate canvas element that will be used for drawing the background (set with the loop).
 * This can help with performance since the background can be drawn once on a separate canvas.
 *
 * Be sure to set this before adding a loop.
 */
function setBackgroundCanvas(canvas: HTMLCanvasElement) {
	state.backgroundCanvas = canvas;
	state.backgroundCtx = canvas.getContext('2d');
}

/**
 * Get the canvas's context.
 */
function getContext() {
	return state.ctx;
}

export default {
	setCanvas,
	setLoop,
	setBackgroundCanvas,
	getContext,
	draw, object, utility,
};
