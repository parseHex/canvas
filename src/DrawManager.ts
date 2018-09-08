import CanvasManager from '.';
import defaults from './defaults';

export class DrawManager {
	private canvas: CanvasManager;
	private ctx: CanvasRenderingContext2D;

	constructor(canvas: CanvasManager) {
		this.canvas = canvas;
		this.ctx = this.canvas.ctx;
	}

	public line(options: Line) {
		this.ctx.strokeStyle = options.stroke || defaults.stroke;
		this.ctx.lineWidth = options.lineWidth || defaults.lineWidth;

		this.ctx.beginPath();
		for (let i = 0; i < options.points.length - 1; i++) {
			this.ctx.moveTo(options.points[i].x, options.points[i].y);
			this.ctx.lineTo(options.points[i + 1].x, options.points[i + 1].y);
		}
		this.ctx.stroke();
		this.ctx.closePath();
	}

	public rectangle(options: Rectangle) {
		this.ctx.fillStyle = options.fill;
		this.ctx.strokeStyle = options.stroke;

		this.ctx.beginPath();
		this.ctx.rect(options.x, options.y, options.width, options.height);
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.closePath();
	}
}
