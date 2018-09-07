import * as normalizeOpts from '../draw/normalize-opts';
import * as objects from './shapes';
import state from '../state';

export function rectangle(opts: ObjectPartialOptions.Rectangle): objects.Rectangle {
	const newObject = new objects.Rectangle(normalizeOpts.rectangle(opts));
	state.objects.push(newObject);
	return newObject;
}
export function triangle(opts: ObjectPartialOptions.Triangle): objects.Triangle {
	const newObject = new objects.Triangle(normalizeOpts.triangle(opts));
	state.objects.push(newObject);
	return newObject;
}
export function ellipse(opts: ObjectPartialOptions.Ellipse): objects.Ellipse {
	const newObject = new objects.Ellipse(normalizeOpts.ellipse(opts));
	state.objects.push(newObject);
	return newObject;
}
export function line(opts: ObjectPartialOptions.Line): objects.Line {
	const newObject = new objects.Line(normalizeOpts.line(opts));
	state.objects.push(newObject);
	return newObject;
}
export function text(opts: ObjectPartialOptions.Text): objects.Text {
	const newObject = new objects.Text(normalizeOpts.text(opts));
	state.objects.push(newObject);
	return newObject;
}
export function point(opts: ObjectPartialOptions.Point): objects.Point {
	const newObject = new objects.Point(normalizeOpts.point(opts));
	state.objects.push(newObject);
	return newObject;
}
export function polygon(opts: ObjectPartialOptions.Polygon): objects.Polygon {
	const newObject = new objects.Polygon(normalizeOpts.polygon(opts));
	state.objects.push(newObject);
	return newObject;
}
