import * as ifc from '../ifc';
import state from '../state';
import * as normalizeOpts from './normalize-opts';

const PI2 = 2 * Math.PI;

/**
 * Draw a rectangle on the canvas.
 */
export function rectangle(opts: ifc.Options.Rectangle, skipNormalize?: boolean) {
	if (!skipNormalize) opts = normalizeOpts.rectangle(opts);

	state.ctx.fillStyle = opts.fill;
	state.ctx.strokeStyle = opts.stroke;

	state.ctx.beginPath();
	state.ctx.rect(opts.x, opts.y, opts.width, opts.height);
	state.ctx.fill();
	state.ctx.stroke();
	state.ctx.closePath();

	return opts;
}

/**
 * Draw a triangle on the canvas.
 */
export function triangle(opts: ifc.Options.Triangle, skipNormalize?: boolean) {
	if (!skipNormalize) opts = normalizeOpts.triangle(opts);

	state.ctx.fillStyle = opts.fill;
	state.ctx.strokeStyle = opts.stroke;

	state.ctx.beginPath();
	state.ctx.moveTo(opts.x1, opts.y1);
	state.ctx.lineTo(opts.x2, opts.y2);
	state.ctx.lineTo(opts.x3, opts.y3);
	state.ctx.lineTo(opts.x1, opts.y1);
	state.ctx.fill();
	state.ctx.stroke();
	state.ctx.closePath();

	return opts;
}

/**
 * Draw a circle on the canvas.
 * (Actually just calls `draw.ellipse` with the `ry` property equal to `rx`.)
 */
export function circle(opts: ifc.Options.Circle, skipNormalize?: boolean) {
	if (!skipNormalize) opts = normalizeOpts.circle(opts);

	return ellipse(<ifc.Options.Ellipse>opts, true);
}

/**
 * Draw an ellipse on the canvas.
 */
export function ellipse(opts: ifc.Options.Ellipse, skipNormalize?: boolean) {
	if (!skipNormalize) opts = normalizeOpts.ellipse(opts);

	state.ctx.fillStyle = opts.fill;
	state.ctx.strokeStyle = opts.stroke;

	state.ctx.beginPath();
	state.ctx.ellipse(opts.x, opts.y, opts.rx, opts.ry, 0, 0, PI2);
	state.ctx.fill();
	state.ctx.closePath();

	return opts;
}

/**
 * Draw a line on the canvas.
 */
export function line(opts: ifc.Options.Line, skipNormalize?: boolean) {
	if (!skipNormalize) opts = normalizeOpts.line(opts);

	state.ctx.strokeStyle = opts.stroke;
	state.ctx.lineWidth = opts.lineWidth;

	state.ctx.beginPath();
	state.ctx.moveTo(opts.x1, opts.y1);
	state.ctx.lineTo(opts.x2, opts.y2);
	state.ctx.stroke();
	state.ctx.closePath();

	return opts;
}

/**
 * Draw text on the canvas.
 */
export function text(opts: ifc.Options.Text, skipNormalize?: boolean) {
	if (!skipNormalize) opts = normalizeOpts.text(opts);

	state.ctx.font = opts.sizePX + 'px ' + opts.fontName;
	state.ctx.fillStyle = opts.fill;
	state.ctx.strokeStyle = opts.stroke;
	state.ctx.fillText(opts.text, opts.x, opts.y);
	state.ctx.strokeText(opts.text, opts.x, opts.y);

	return opts;
}
