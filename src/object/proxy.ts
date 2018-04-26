import * as ifc from '../ifc';
import * as normalizeOpts from '../draw/normalize-opts';
import { Rectangle, Ellipse, Line, Text, Triangle } from './shapes';
import state from '../state';

export function rectangle(opts: ifc.Options.Rectangle): Rectangle {
	const newObject = new Rectangle(normalizeOpts.rectangle(opts));
	state.objects.push(newObject);
	return newObject;
}
export function triangle(opts: ifc.Options.Triangle): Triangle {
	const newObject = new Triangle(normalizeOpts.triangle(opts));
	state.objects.push(newObject);
	return newObject;
}
export function ellipse(opts: ifc.Options.Ellipse): Ellipse {
	const newObject = new Ellipse(normalizeOpts.ellipse(opts));
	state.objects.push(newObject);
	return newObject;
}
export function line(opts: ifc.Options.Line): Line {
	const newObject = new Line(normalizeOpts.line(opts));
	state.objects.push(newObject);
	return newObject;
}
export function text(opts: ifc.Options.Text): Text {
	const newObject = new Text(normalizeOpts.text(opts));
	state.objects.push(newObject);
	return newObject;
}
