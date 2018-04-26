import { PossibleShapes, Options } from '../../ifc';
import * as draw from '../../draw';
import BaseObjectShape from './base';

export default class Line extends BaseObjectShape {
	shape = 'line' as PossibleShapes;
	props: Options.Line;

	constructor(opts: Options.Line) {
		super();

		this.props = opts;
	}

	_draw() {
		draw.line(this.props, true);
	}

	/**
	 * `{ x1: number, y1: number, x2: number, y2: number }`
	 */
	move(newPos: Partial<Options.Line>) {
		this.props.x1 = newPos.x1;
		this.props.y1 = newPos.y1;
		this.props.x2 = newPos.x2;
		this.props.y2 = newPos.y2;
	}

	/**
	 * `{ lineWidth: number }`
	 */
	resize(newDims: Partial<Options.Line>) {
		this.props.lineWidth = newDims.lineWidth;
	}

	/**
	 * `{ stroke: CanvasColor }`
	 */
	restyle(newColors: Partial<Options.Line>) {
		this.props.stroke = newColors.stroke;
	}

	delete() {
		this._alive = false;
	}
}
