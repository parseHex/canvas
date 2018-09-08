import CanvasManager from '.';
import defaults from './defaults';
import constants from './constants';

export class DrawManager {
	private canvas: CanvasManager;
	private ctx: CanvasRenderingContext2D;

	constructor(canvas: CanvasManager) {
		this.canvas = canvas;
		this.ctx = this.canvas.ctx;
	}

	public line(options: LineOptions) {
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

	public rectangle(options: RectangleOptions) {
		this.ctx.fillStyle = options.fill || defaults.fill;
		this.ctx.strokeStyle = options.stroke || defaults.stroke;

		this.ctx.beginPath();
		this.ctx.rect(options.x, options.y, options.width, options.height);
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.closePath();
	}

	public triangle(options: TriangleOptions) {
		this.ctx.fillStyle = options.fill || defaults.fill;
		this.ctx.strokeStyle = options.stroke || defaults.stroke;

		this.ctx.beginPath();
		this.ctx.moveTo(options.points[0].x, options.points[0].y);
		this.ctx.lineTo(options.points[1].x, options.points[1].y);
		this.ctx.lineTo(options.points[2].x, options.points[2].y);
		this.ctx.lineTo(options.points[0].x, options.points[0].y);
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.closePath();
	}

	public ellipse(options: EllipseOptions) {
		this.ctx.fillStyle = options.fill || defaults.fill;
		this.ctx.strokeStyle = options.stroke || defaults.stroke;

		const rx = options.rx;
		const ry = options.ry !== undefined ? options.ry : options.rx;

		this.ctx.beginPath();
		this.ctx.ellipse(options.x, options.y, rx, ry, 0, 0, constants.PI2);
		this.ctx.fill();
		this.ctx.closePath();
	}

	public text(options: TextOptions) {
		const size = options.size || defaults.sizePX;
		const fontName = options.fontName || defaults.fontName;

		this.ctx.font = size + 'px ' + fontName;
		this.ctx.fillStyle = options.fill;
		this.ctx.strokeStyle = options.stroke;
		this.ctx.fillText(options.value, options.x, options.y);
		this.ctx.strokeText(options.value, options.x, options.y);
	}

	public polygon(options: PolygonOptions) {
		this.ctx.fillStyle = options.fill || defaults.fill;
		this.ctx.strokeStyle = options.stroke || defaults.stroke;

		this.ctx.beginPath();
		this.ctx.moveTo(options.points[0].x, options.points[0].y);
		for (let i = 1; i < options.points.length; i++) {
			this.ctx.lineTo(options.points[i].x, options.points[i].y);
		}
		this.ctx.lineTo(options.points[0].x, options.points[0].y);
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.closePath();
	}
}
