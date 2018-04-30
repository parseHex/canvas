import { Object } from '../../ifc';
import * as draw from '../../draw';
import BaseObjectShape from './base';

export default class Triangle extends BaseObjectShape {
	shape = 'triangle' as Object.Possible.ShapeLabel;
	props: Object.Options.Triangle;

	constructor(opts: Object.Options.Triangle) {
		super();

		this.props = opts;
	}

	_draw() {
		draw.triangle(this.props, true);
	}

	move(newPos: Object.Position.Triangle) {
		for (let i = 0; i < newPos.length; i++) {
			this.props.pos[i].x = newPos[i].x;
			this.props.pos[i].y = newPos[i].y;
		}
	}

	/**
	 * No-Op: Can't resize triangles, must manually move each point using `.move()`
	 */
	resize(newDims: null) {
		console.error('Cannot resize a triangle, use `.move()` instead.');
	}

	restyle(newColors: Partial<Object.Style.Triangle>) {
		if (newColors.fill !== undefined) this.props.fill = newColors.fill;
		if (newColors.stroke !== undefined) this.props.stroke = newColors.stroke;
	}

	delete() {
		this._alive = false;
	}
}
