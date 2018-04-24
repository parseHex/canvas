import * as ifc from './ifc';
import state from './state';

const defaults = {
	fill: '#ECEFF1',
	stroke: '#455A64',
};

const PI2 = 2 * Math.PI;

/**
 * Draw a rectange on the canvas.
 */
export function rect(opts: ifc.Options.Rectangle) {
	opts.fill = opts.fill || defaults.fill;
	opts.stroke = opts.stroke || defaults.stroke;

	state.ctx.fillStyle = opts.fill;
	state.ctx.strokeStyle = opts.stroke;

	state.ctx.beginPath();
	state.ctx.rect(opts.x, opts.y, opts.width, opts.height);
	state.ctx.fill();
	state.ctx.stroke();
	state.ctx.closePath();
}

/**
 * Draw a circle on the canvas.
 * (Actually just calls `draw.ellipse` without the `.ry` property if there is one.)
 */
export function circle(opts: ifc.Options.Circle) {
	ellipse(<ifc.Options.Ellipse>opts);
}

/**
 * Draw an ellipse on the canvas.
 */
export function ellipse(opts: ifc.Options.Ellipse) {
	opts.fill = opts.fill || defaults.fill;
	opts.stroke = opts.stroke || defaults.stroke;
	opts.ry = opts.ry || opts.rx;

	state.ctx.fillStyle = opts.fill;
	state.ctx.strokeStyle = opts.stroke;

	state.ctx.beginPath();
	state.ctx.ellipse(opts.x, opts.y, opts.rx, opts.ry, 0, 0, PI2);
	state.ctx.fill();
	state.ctx.closePath();
}

/**
 * Draw a line on the canvas.
 */
export function line(opts: ifc.Options.Line) {
	opts.color = opts.color || defaults.stroke;
	opts.lineWidth = opts.lineWidth || 1;

	state.ctx.strokeStyle = opts.color;
	state.ctx.lineWidth = opts.lineWidth;

	state.ctx.beginPath();
	state.ctx.moveTo(opts.point1.x, opts.point1.y);
	state.ctx.lineTo(opts.point2.x, opts.point2.y);
	state.ctx.stroke();
	state.ctx.closePath();
}

/**
 * Draw text on the canvas.
 */
export function text(opts: ifc.Options.Text) {
	opts.color = opts.color || 'red';
	opts.fontName = opts.fontName || 'sans-serif';
	opts.sizePX = opts.sizePX || 12;

	state.ctx.font = opts.sizePX + 'px ' + opts.fontName;
	state.ctx.fillStyle = opts.color;
	state.ctx.fillText(opts.text, opts.x, opts.y);
}
