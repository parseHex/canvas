import CanvasManager from '.';

export class MouseManager {
	private canvas: CanvasManager;

	private clickHandlers: MouseEventHandler[] = [];
	private dragHandlers: MouseEventHandler[] = [];

	private dragging = false;

	constructor(canvas: CanvasManager) {
		this.canvas = canvas;

		const handleClick = this.handleClick.bind(this);
		const handleMousedown = this.handleMousedown.bind(this);
		const handleMousemove = this.handleMousemove.bind(this);
		const handleMouseup = this.handleMouseup.bind(this);
		this.canvas.element.addEventListener('click', handleClick);
		this.canvas.element.addEventListener('mousedown', handleMousedown);
		this.canvas.element.addEventListener('mousemove', handleMousemove);
		this.canvas.element.addEventListener('mouseup', handleMouseup);
	}

	public onClick(handler: MouseEventHandler) {
		this.clickHandlers.push(handler);
	}

	public onDrag(handler: MouseEventHandler) {
		this.dragHandlers.push(handler);
	}

	private handleClick(event: MouseEvent) {
		const position = {
			x: event.offsetX,
			y: event.offsetY,
		};
		this.sendPosition(position, this.clickHandlers);
	}

	private handleMousedown(event: MouseEvent) {
		const position = {
			x: event.offsetX,
			y: event.offsetY,
		};
		this.sendPosition(position, this.dragHandlers);
	}
	private handleMousemove(event: MouseEvent) {
		if (!this.dragging) return;

		const position = {
			x: event.offsetX,
			y: event.offsetY,
		};
		this.sendPosition(position, this.dragHandlers);
	}
	private handleMouseup() {
		this.dragging = false;
	}

	private sendPosition(pos: Coordinate, callbacks: MouseEventHandler[]) {
		for (let i = 0; i < callbacks.length; i++) {
			callbacks[i](pos);
		}
	}
}
