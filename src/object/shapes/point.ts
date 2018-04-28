import { PossibleShapes, Options } from '../../ifc';
import * as draw from '../../draw';
import BaseObjectShape from './base';

export default class Point extends BaseObjectShape {
	shape = 'point' as PossibleShapes;
	props: Options.Point;
	private fixedProps: Options.Ellipse;

	constructor(opts: Options.Point) {
		super();

		this.props = opts;
		this.fixedProps = {
			x: this.props.x,
			y: this.props.y,
			rx: 1,
			ry: 1,
			fill: this.props.fill,
			stroke: this.props.stroke,
		};
	}

	_draw() {
		draw.ellipse(this.fixedProps, true);
	}

	/**
	 * `{ x: number, y: number }`
	 */
	move(newPos: Partial<Options.Point>) {
		this.props.x = newPos.x;
		this.props.y = newPos.y;
		this.fixedProps.x = newPos.x;
		this.fixedProps.y = newPos.y;
	}

	/**
	 * No-Op: Can't resize a point since it's just an Ellipse with a radius of 1.
	 */
	resize(newDims: Partial<Options.Point>) {
		console.error('Cannot resize a point, it has a fixed size.');
	}

	/**
	 * `{ fill?: CanvasColor, stroke?: CanvasColor }`
	 */
	restyle(newColors: Partial<Options.Point>) {
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
