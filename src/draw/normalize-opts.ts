import * as ifc from '../ifc';
import defaults from '../defaults';

export function rectangle(opts: ifc.Options.Rectangle): ifc.Options.Rectangle {
	return {
		x: opts.x,
		y: opts.y,
		width: opts.width,
		height: opts.height,
		fill: opts.fill || defaults.fill,
		stroke: opts.stroke || defaults.fill,
	};
}
export function circle(opts: ifc.Options.Circle): ifc.Options.Ellipse {
	return {
		x: opts.x,
		y: opts.y,
		rx: opts.rx,
		ry: opts.rx,
		fill: opts.fill || defaults.fill,
		stroke: opts.stroke || defaults.stroke,
	};
}
export function ellipse(opts: ifc.Options.Ellipse): ifc.Options.Ellipse {
	return {
		x: opts.x,
		y: opts.y,
		rx: opts.rx,
		ry: opts.ry,
		fill: opts.fill || defaults.fill,
		stroke: opts.stroke || defaults.stroke,
	};
}
export function line(opts: ifc.Options.Line): ifc.Options.Line {
	return {
		x1: opts.x1,
		y1: opts.y1,
		x2: opts.x2,
		y2: opts.y2,
		lineWidth: opts.lineWidth || defaults.lineWidth,
		stroke: opts.stroke || defaults.stroke,
	};
}
export function text(opts: ifc.Options.Text): ifc.Options.Text {
	return {
		x: opts.x,
		y: opts.y,
		text: opts.text,
		fontName: opts.fontName || defaults.fontName,
		sizePX: opts.sizePX || defaults.sizePX,
		fill: opts.fill || defaults.textFill,
		stroke: opts.stroke || defaults.textStroke,
	};
}
