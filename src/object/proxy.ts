// these are really just a mirror of the c.draw functions
// need to figure out a more elegant way of going about this

import * as ifc from '../ifc';
import * as normalizeOpts from '../draw/normalize-opts';
import { move, resize, recolor, deleteObj } from './object-methods';
import state from '../state';

export function rectangle(opts: ifc.Options.Rectangle): ifc.CanvasObject {
	const newObject = {
		shape: 'rectangle',
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
		shape: 'circle',
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
		shape: 'ellipse',
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
		shape: 'line',
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
		shape: 'text',
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
