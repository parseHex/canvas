import * as draw from '../../draw';
import BaseObjectShape from './_base';

export default class Ellipse extends BaseObjectShape {
	shape = 'ellipse' as Possible.ShapeLabel;
	props: ObjectOptions.Ellipse;

	constructor(opts: ObjectOptions.Ellipse) {
		super();

		this.props = opts;
	}

	_draw() {
		draw.ellipse(this.props, true);
	}

	move(newPos: ObjectPosition.Ellipse) {
		this.props.pos.x = newPos.x;
		this.props.pos.y = newPos.y;
	}

	/**
	 * Change the ellipse's `rx` (radius-x) and `ry` (radius-y).
	 */
	resize(newDim: ObjectDimensions.Ellipse) {
		this.props.rx = newDim.rx;
		this.props.ry = newDim.ry;
	}

	/**
	 * Change the ellipse's `fill` and/or `stroke`.
	 */
	restyle(newStyle: Partial<ObjectStyle.Ellipse>) {
		if (newStyle.fill !== undefined) this.props.fill = newStyle.fill;
		if (newStyle.stroke !== undefined) this.props.stroke = newStyle.stroke;
	}
}
