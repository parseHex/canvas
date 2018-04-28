import * as ifc from '../ifc';
import * as normalizeOpts from '../draw/normalize-opts';
import * as objects from './shapes';
import state from '../state';

export function rectangle(opts: ifc.Options.Rectangle): objects.Rectangle {
	const newObject = new objects.Rectangle(normalizeOpts.rectangle(opts));
	state.objects.push(newObject);
	return newObject;
}
export function triangle(opts: ifc.Options.Triangle): objects.Triangle {
	const newObject = new objects.Triangle(normalizeOpts.triangle(opts));
	state.objects.push(newObject);
	return newObject;
}
export function ellipse(opts: ifc.Options.Ellipse): objects.Ellipse {
	const newObject = new objects.Ellipse(normalizeOpts.ellipse(opts));
	state.objects.push(newObject);
	return newObject;
}
export function line(opts: ifc.Options.Line): objects.Line {
	const newObject = new objects.Line(normalizeOpts.line(opts));
	state.objects.push(newObject);
	return newObject;
}
export function text(opts: ifc.Options.Text): objects.Text {
	const newObject = new objects.Text(normalizeOpts.text(opts));
	state.objects.push(newObject);
	return newObject;
}
export function point(opts: ifc.Options.Point): objects.Point {
	const newObject = new objects.Point(normalizeOpts.point(opts));
	state.objects.push(newObject);
	return newObject;
}
