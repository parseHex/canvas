import { PossibleShapes, Options } from '../../ifc';
import BaseObjectShape from './base';
import * as draw from '../../draw';

export default class Rectangle extends BaseObjectShape {
	shape = 'rectangle' as PossibleShapes;
	props: Options.Rectangle;

	constructor(opts: Options.Rectangle) {
		super();

		this.props = opts;
	}

	_draw() {
		draw.rectangle(this.props, true);
	}

	/**
	 * `{ x: umber, y: number }`
	 */
	move(newPos: Partial<Options.Rectangle>) {
		this.props.x = newPos.x;
		this.props.y = newPos.y;
	}

	/**
	 * `{ width: number, height: number }`
	 */
	resize(newDims: Partial<Options.Rectangle>) {
		this.props.width = newDims.width;
		this.props.height = newDims.height;
	}

	/**
	 * `{ fill?: CanvasColor, stroke?: CanvasColor }`
	 */
	restyle(newColors: Partial<Options.Rectangle>) {
		if (newColors.fill !== undefined) this.props.fill = newColors.fill;
		if (newColors.stroke !== undefined) this.props.stroke = newColors.stroke;
	}

	delete() {
		this._alive = false;
	}
}
