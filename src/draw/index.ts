import * as ifc from '../ifc';
import state from '../state';
import * as normalizeOpts from './normalize-opts';

const PI2 = 2 * Math.PI;

/**
 * Draw a rectangle on the canvas.
 */
export function rectangle(opts: ifc.Object.PartialOptions.Rectangle, skipNormalize?: boolean) {
	if (!skipNormalize) opts = normalizeOpts.rectangle(opts);

	state.ctx.fillStyle = opts.fill;
	state.ctx.strokeStyle = opts.stroke;

	state.ctx.beginPath();
	state.ctx.rect(opts.pos.x, opts.pos.y, opts.width, opts.height);
	state.ctx.fill();
	state.ctx.stroke();
	state.ctx.closePath();

	return opts;
}

/**
 * Draw a triangle on the canvas.
 */
export function triangle(opts: ifc.Object.PartialOptions.Triangle, skipNormalize?: boolean) {
	if (!skipNormalize) opts = normalizeOpts.triangle(opts);

	state.ctx.fillStyle = opts.fill;
	state.ctx.strokeStyle = opts.stroke;

	state.ctx.beginPath();
	state.ctx.moveTo(opts.pos[0].x, opts.pos[0].y);
	state.ctx.lineTo(opts.pos[1].x, opts.pos[1].y);
	state.ctx.lineTo(opts.pos[2].x, opts.pos[2].y);
	state.ctx.lineTo(opts.pos[0].x, opts.pos[0].y);
	state.ctx.fill();
	state.ctx.stroke();
	state.ctx.closePath();

	return opts;
}

/**
 * Draw an ellipse on the canvas.
 */
export function ellipse(opts: ifc.Object.PartialOptions.Ellipse, skipNormalize?: boolean) {
	if (!skipNormalize) opts = normalizeOpts.ellipse(opts);

	state.ctx.fillStyle = opts.fill;
	state.ctx.strokeStyle = opts.stroke;

	state.ctx.beginPath();
	state.ctx.ellipse(opts.pos.x, opts.pos.y, opts.rx, opts.ry, 0, 0, PI2);
	state.ctx.fill();
	state.ctx.closePath();

	return opts;
}

/**
 * Draw a line on the canvas.
 */
export function line(opts: ifc.Object.PartialOptions.Line, skipNormalize?: boolean) {
	if (!skipNormalize) opts = normalizeOpts.line(opts);

	state.ctx.strokeStyle = opts.stroke;
	state.ctx.lineWidth = opts.lineWidth;

	state.ctx.beginPath();
	state.ctx.moveTo(opts.pos[0].x, opts.pos[0].y);
	state.ctx.lineTo(opts.pos[1].x, opts.pos[1].y);
	state.ctx.stroke();
	state.ctx.closePath();

	return opts;
}

/**
 * Draw text on the canvas.
 */
export function text(opts: ifc.Object.PartialOptions.Text, skipNormalize?: boolean) {
	if (!skipNormalize) opts = normalizeOpts.text(opts);

	state.ctx.font = opts.sizePX + 'px ' + opts.fontName;
	state.ctx.fillStyle = opts.fill;
	state.ctx.strokeStyle = opts.stroke;
	state.ctx.fillText(opts.text, opts.pos.x, opts.pos.y);
	state.ctx.strokeText(opts.text, opts.pos.x, opts.pos.y);

	return opts;
}

/**
 * Draw an arbitrary polygon with any number of vertices on the canvas.
 */
export function polygon(opts: ifc.Object.PartialOptions.Polygon, skipNormalize?: boolean) {
	if (!skipNormalize) opts = normalizeOpts.polygon(opts);

	state.ctx.fillStyle = opts.fill;
	state.ctx.strokeStyle = opts.stroke;

	state.ctx.beginPath();
	state.ctx.moveTo(opts.pos[0].x, opts.pos[0].y);
	for (let i = 1; i < opts.pos.length; i++) {
		state.ctx.lineTo(opts.pos[i].x, opts.pos[i].y);
	}
	state.ctx.lineTo(opts.pos[0].x, opts.pos[0].y);
	state.ctx.closePath();

	return opts;
}
