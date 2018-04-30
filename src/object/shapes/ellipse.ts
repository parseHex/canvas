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

	resize(newDims: Object.Dimension.Ellipse) {
		this.props.rx = newDims.rx;
		this.props.ry = newDims.ry;
	}

	restyle(newColors: Partial<Object.Style.Ellipse>) {
		if (newColors.fill !== undefined) this.props.fill = newColors.fill;
		if (newColors.stroke !== undefined) this.props.stroke = newColors.stroke;
	}

	delete() {
		this._alive = false;
	}
}
