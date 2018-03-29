import * as ifc from './ifc';
import state from './state';

/**
 * Clear the canvas context using `clearRect`.
 */
export function clear() {
	state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);
}

/**
 * Set the canvas context's transform to its default values.
 */
export function resetTransform() {
	state.ctx.setTransform(1, 0, 0, 1, 0, 0);
}

/**
 * Add an onClick handler to the canvas.
 * The handler will be called with the coordinate of the click in the canvas.
 * (Currently, `event.offsetX` and `event.offsetY` are where the coordinates come from.)
 */
export function onClick(handler: (mousePos: ifc.Coordinate) => void) {
	state.canvas.addEventListener('click', function (event: MouseEvent) {
		const mousePos = {
			x: event.offsetX,
			y: event.offsetY,
		};

		handler(mousePos);
	});
}
