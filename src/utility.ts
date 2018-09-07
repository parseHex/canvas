import state from './state';

/**
 * Clear the canvas.
 */
export function clear() {
	state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);
}

/**
 * Set the canvas's transform to its default values.
 */
export function resetTransform() {
	state.ctx.setTransform(1, 0, 0, 1, 0, 0);
}

/**
 * Add an onClick handler to the canvas.
 */
export function onClick(handler: MouseEventHandler) {
	state.canvas.addEventListener('click', (event: MouseEvent) => {
		const mousePos = {
			x: event.offsetX,
			y: event.offsetY,
		};

		handler(mousePos);
	});
}

/**
 * Add an onDrag handler to the canvas.
 *
 * `handler` will also be called once on `mousedown` event.
 */
export function onDrag(handler: MouseEventHandler) {
	state.canvas.addEventListener('mousedown', (event: MouseEvent) => {
		state.dragging = true;

		const mousePos = {
			x: event.offsetX,
			y: event.offsetY,
		};

		handler(mousePos);
	});

	// listen for mouseup on window to catch the event
	// when not hovering over canvas
	window.addEventListener('mouseup', () => {
		state.dragging = false;
	});

	state.canvas.addEventListener('mousemove', (event: MouseEvent) => {
		if (!state.dragging) return;

		const mousePos = {
			x: event.offsetX,
			y: event.offsetY,
		};

		handler(mousePos);
	});
}
