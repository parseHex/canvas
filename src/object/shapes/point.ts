import { Object } from '../../ifc';
import * as draw from '../../draw';
import BaseObjectShape from './base';

export default class Point extends BaseObjectShape {
	shape = 'point' as Object.Possible.ShapeLabel;
	props: Object.Options.Point;
	private fixedProps: Object.Options.Ellipse;

	constructor(opts: Object.Options.Point) {
		super();

		this.props = opts;
		this.fixedProps = {
			pos: {
				x: this.props.pos.x,
				y: this.props.pos.y,
			},
			rx: 1,
			ry: 1,
			fill: this.props.fill,
			stroke: this.props.stroke,
		};
	}

	_draw() {
		draw.ellipse(this.fixedProps, true);
	}

	move(newPos: Object.Position.Point) {
		this.props.pos.x = newPos.x;
		this.props.pos.y = newPos.y;
		this.fixedProps.pos.x = newPos.x;
		this.fixedProps.pos.y = newPos.y;
	}

	/**
	 * No-Op: Can't resize a point since it's just an Ellipse with a radius of 1.
	 */
	resize(newDims: null) {
		console.error('Cannot resize a point, it has a fixed size.');
	}

	restyle(newColors: Partial<Object.Options.Point>) {
		if (newColors.fill !== undefined) {
			this.props.fill = newColors.fill;
			this.fixedProps.fill = newColors.fill;
		}
		if (newColors.stroke !== undefined) {
			this.props.stroke = newColors.stroke;
			this.fixedProps.stroke = newColors.stroke;
		}
	}

	delete() {
		this._alive = false;
	}
}
