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

	resize(newDims: Object.Dimension.Rectangle) {
		this.props.width = newDims.width;
		this.props.height = newDims.height;
	}

	restyle(newColors: Partial<Object.Style.Rectangle>) {
		if (newColors.fill !== undefined) this.props.fill = newColors.fill;
		if (newColors.stroke !== undefined) this.props.stroke = newColors.stroke;
	}

	delete() {
		this._alive = false;
	}
}
