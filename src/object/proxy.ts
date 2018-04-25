import * as ifc from '../ifc';
import * as normalizeOpts from '../draw/normalize-opts';
import { move, resize, recolor, deleteObj } from './object-methods';
import state from '../state';

export function rectangle(opts: ifc.Options.Rectangle): ifc.CanvasObject {
	const newObject = {
		shape: 'rectangle' as ifc.PossibleShapes,
		properties: normalizeOpts.rectangle(opts),
		move,
		resize,
		recolor,
		delete: deleteObj,
		_dead: false,
	};
	state.objects.push(newObject);
	return newObject;
}
export function circle(opts: ifc.Options.Circle) {
	const newObject = {
		shape: 'circle' as ifc.PossibleShapes,
		properties: normalizeOpts.circle(opts),
		move,
		resize,
		recolor,
		delete: deleteObj,
		_dead: false,
	};
	state.objects.push(newObject);
	return newObject;
}
export function ellipse(opts: ifc.Options.Ellipse) {
	const newObject = {
		shape: 'ellipse' as ifc.PossibleShapes,
		properties: normalizeOpts.ellipse(opts),
		move,
		resize,
		recolor,
		delete: deleteObj,
		_dead: false,
	};
	state.objects.push(newObject);
	return newObject;
}
export function line(opts: ifc.Options.Line) {
	const newObject = {
		shape: 'line' as ifc.PossibleShapes,
		properties: normalizeOpts.line(opts),
		move,
		resize,
		recolor,
		delete: deleteObj,
		_dead: false,
	};
	state.objects.push(newObject);
	return newObject;
}
export function text(opts: ifc.Options.Text) {
	const newObject = {
		shape: 'text' as ifc.PossibleShapes,
		properties: normalizeOpts.text(opts),
		move,
		resize,
		recolor,
		delete: deleteObj,
		_dead: false,
	};
	state.objects.push(newObject);
	return newObject;
}
