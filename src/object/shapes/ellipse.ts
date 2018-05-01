import { Object, Coordinate } from '../../ifc';
import * as draw from '../../draw';
import BaseObjectShape from './base';

export default class Ellipse extends BaseObjectShape {
	shape = 'ellipse' as Object.Possible.ShapeLabel;
	props: Object.Options.Ellipse;

	constructor(opts: Object.Options.Ellipse) {
		super();

		this.props = opts;
	}

	_draw() {
		draw.ellipse(this.props, true);
	}

	move(newPos: Object.Position.Ellipse) {
		this.props.pos.x = newPos.x;
		this.props.pos.y = newPos.y;
	}

	/**
	 * Change the ellipse's `rx` (radius-x) and `ry` (radius-y).
	 */
	resize(newDim: Object.Dimension.Ellipse) {
		this.props.rx = newDim.rx;
		this.props.ry = newDim.ry;
	}

	/**
	 * Change the ellipse's `fill` and/or `stroke`.
	 */
	restyle(newStyle: Partial<Object.Style.Ellipse>) {
		if (newStyle.fill !== undefined) this.props.fill = newStyle.fill;
		if (newStyle.stroke !== undefined) this.props.stroke = newStyle.stroke;
	}

	delete() {
		this._alive = false;
	}
}
