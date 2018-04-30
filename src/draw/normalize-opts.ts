import * as ifc from '../ifc';
import defaults from '../defaults';

export function rectangle(opts: ifc.Object.PartialOptions.Rectangle): ifc.Object.Options.Rectangle {
	return {
		pos: copyPos(opts.pos),
		width: opts.width,
		height: opts.height,
		fill: opts.fill || defaults.fill,
		stroke: opts.stroke || defaults.fill,
	};
}
export function triangle(opts: ifc.Object.PartialOptions.Triangle): ifc.Object.Options.Triangle {
	return {
		pos: [
			copyPos(opts.pos[0]),
			copyPos(opts.pos[1]),
			copyPos(opts.pos[2]),
		],
		fill: opts.fill || defaults.fill,
		stroke: opts.stroke || defaults.fill,
	};
}
export function ellipse(opts: ifc.Object.PartialOptions.Ellipse): ifc.Object.Options.Ellipse {
	return {
		pos: copyPos(opts.pos),
		rx: opts.rx,
		ry: opts.ry,
		fill: opts.fill || defaults.fill,
		stroke: opts.stroke || defaults.stroke,
	};
}
export function line(opts: ifc.Object.PartialOptions.Line): ifc.Object.Options.Line {
	return {
		pos: [
			copyPos(opts.pos[0]),
			copyPos(opts.pos[1]),
		],
		lineWidth: opts.lineWidth || defaults.lineWidth,
		stroke: opts.stroke || defaults.stroke,
	};
}
export function text(opts: ifc.Object.PartialOptions.Text): ifc.Object.Options.Text {
	return {
		pos: copyPos(opts.pos),
		text: opts.text,
		fontName: opts.fontName || defaults.fontName,
		sizePX: opts.sizePX || defaults.sizePX,
		fill: opts.fill || defaults.textFill,
		stroke: opts.stroke || defaults.textStroke,
	};
}
export function point(opts: ifc.Object.PartialOptions.Point): ifc.Object.Options.Point {
	return {
		pos: copyPos(opts.pos),
		fill: opts.fill || defaults.fill,
		stroke: opts.stroke || defaults.stroke,
	};
}

function copyPos(posObject: ifc.Coordinate) {
	return {
		x: posObject.x,
		y: posObject.y,
	};
}
