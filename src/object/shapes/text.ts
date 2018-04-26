import { PossibleShapes, Options } from '../../ifc';
import * as draw from '../../draw';
import BaseObjectShape from './base';

export default class Text extends BaseObjectShape {
	shape = 'text' as PossibleShapes;
	props: Options.Text;

	constructor(opts: Options.Text) {
		super();

		this.props = opts;
	}

	_draw() {
		draw.text(this.props, true);
	}

	/**
	 * `{ x: number, y: number }`
	 */
	move(newPos: Partial<Options.Text>) {
		this.props.x = newPos.x;
		this.props.y = newPos.y;
	}

	/**
	 * `{ sizePX: number }`
	 */
	resize(newDims: Partial<Options.Text>) {
		this.props.sizePX = newDims.sizePX;
	}

	/**
	 * `{ fill?: CanvasColor, stroke?: CanvasColor, fontName?: string }`
	 */
	restyle(newColors: Partial<Options.Text>) {
		if (newColors.fill !== undefined) this.props.fill = newColors.fill;
		if (newColors.stroke !== undefined) this.props.stroke = newColors.stroke;
		if (newColors.fontName !== undefined) this.props.fontName = newColors.fontName;
	}

	delete() {
		this._alive = false;
	}
}
