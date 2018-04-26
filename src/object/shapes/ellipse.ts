import { PossibleShapes, Options } from '../../ifc';
import * as draw from '../../draw';
import BaseObjectShape from './base';

export default class Ellipse extends BaseObjectShape {
	shape = 'ellipse' as PossibleShapes;
	props: Options.Ellipse;

	constructor(opts: Options.Ellipse) {
		super();

		this.props = opts;
	}

	_draw() {
		draw.ellipse(this.props, true);
	}

	/**
	 * `{ x: number, y: number }`
	 */
	move(newPos: Partial<Options.Ellipse>) {
		this.props.x = newPos.x;
		this.props.y = newPos.y;
	}

	/**
	 * `{ rx: number, ry: number }`
	 */
	resize(newDims: Partial<Options.Ellipse>) {
		this.props.rx = newDims.rx;
		this.props.ry = newDims.ry;
	}

	/**
	 * `{ fill?: CanvasColor, stroke?: CanvasColor }`
	 */
	restyle(newColors: Partial<Options.Ellipse>) {
		if (newColors.fill !== undefined) this.props.fill = newColors.fill;
		if (newColors.stroke !== undefined) this.props.stroke = newColors.stroke;
	}

	delete() {
		this._alive = false;
	}
}
