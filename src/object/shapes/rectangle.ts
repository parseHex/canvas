import { Object } from '../../ifc';
import BaseObjectShape from './base';
import * as draw from '../../draw';

export default class Rectangle extends BaseObjectShape {
	shape = 'rectangle' as Object.Possible.ShapeLabel;
	props: Object.Options.Rectangle;

	constructor(opts: Object.Options.Rectangle) {
		super();

		this.props = opts;
	}

	_draw() {
		draw.rectangle(this.props, true);
	}

	move(newPos: Object.Position.Rectangle) {
		this.props.pos.x = newPos.x;
		this.props.pos.y = newPos.y;
	}

	/**
	 * Change the rectangle's `width` and `height`.
	 */
	resize(newDim: Object.Dimension.Rectangle) {
		this.props.width = newDim.width;
		this.props.height = newDim.height;
	}

	/**
	 * Change the rectangle's `fill` and/or `stroke`.
	 */
	restyle(newStyle: Partial<Object.Style.Rectangle>) {
		if (newStyle.fill !== undefined) this.props.fill = newStyle.fill;
		if (newStyle.stroke !== undefined) this.props.stroke = newStyle.stroke;
	}

	delete() {
		this._alive = false;
	}
}
