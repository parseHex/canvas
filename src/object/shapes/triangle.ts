import { PossibleShapes, Options } from '../../ifc';
import * as draw from '../../draw';
import BaseObjectShape from './base';

export default class Triangle extends BaseObjectShape {
	shape = 'triangle' as PossibleShapes;
	props: Options.Triangle;

	constructor(opts: Options.Triangle) {
		super();

		this.props = opts;
	}

	_draw() {
		draw.triangle(this.props, true);
	}

	/**
	 * `{ x1: number, y1: number, x2: number, y2: number, x3: number, y3: number }`
	 */
	move(newPos: Partial<Options.Triangle>) {
		this.props.x1 = newPos.x1;
		this.props.y1 = newPos.y1;
		this.props.x2 = newPos.x2;
		this.props.y2 = newPos.y2;
		this.props.x3 = newPos.x3;
		this.props.y3 = newPos.y3;
	}

	/**
	 * No-Op: Can't resize triangles, must manually move each point using `.move()`
	 */
	resize(newDims: Partial<Options.Triangle>) {
		console.error('Cannot resize a triangle, use `.move()` instead.');
	}

	/**
	 * `{ fill?: CanvasColor, stroke?: CanvasColor }`
	 */
	restyle(newColors: Partial<Options.Triangle>) {
		if (newColors.fill !== undefined) this.props.fill = newColors.fill;
		if (newColors.stroke !== undefined) this.props.stroke = newColors.stroke;
	}

	delete() {
		this._alive = false;
	}
}
