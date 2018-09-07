import BaseObjectShape from './_base';
import * as draw from '../../draw';

export default class Rectangle extends BaseObjectShape {
	shape = 'rectangle' as Possible.ShapeLabel;
	props: ObjectOptions.Rectangle;

	constructor(opts: ObjectOptions.Rectangle) {
		super();

		this.props = opts;
	}

	_draw() {
		draw.rectangle(this.props, true);
	}

	move(newPos: ObjectPosition.Rectangle) {
		this.props.pos.x = newPos.x;
		this.props.pos.y = newPos.y;
	}

	/**
	 * Change the rectangle's `width` and `height`.
	 */
	resize(newDim: ObjectDimensions.Rectangle) {
		this.props.width = newDim.width;
		this.props.height = newDim.height;
	}

	/**
	 * Change the rectangle's `fill` and/or `stroke`.
	 */
	restyle(newStyle: Partial<ObjectStyle.Rectangle>) {
		if (newStyle.fill !== undefined) this.props.fill = newStyle.fill;
		if (newStyle.stroke !== undefined) this.props.stroke = newStyle.stroke;
	}
}
