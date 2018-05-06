import { Object } from '../../ifc';
import * as draw from '../../draw';
import BaseObjectShape from './_base';

export default class Text extends BaseObjectShape {
	shape = 'text' as Object.Possible.ShapeLabel;
	props: Object.Options.Text;

	constructor(opts: Object.Options.Text) {
		super();

		this.props = opts;
	}

	_draw() {
		draw.text(this.props, true);
	}

	move(newPos: Object.Position.Text) {
		this.props.pos.x = newPos.x;
		this.props.pos.y = newPos.y;
	}

	/**
	 * Change the text's `sizePX` (size in pixels).
	 */
	resize(newDim: Object.Dimension.Text) {
		this.props.sizePX = newDim.sizePX;
	}

	/**
	 * Change the text's `fill` and/or `stroke` and/or `fontName`.
	 */
	restyle(newStyle: Partial<Object.Style.Text>) {
		if (newStyle.fill !== undefined) this.props.fill = newStyle.fill;
		if (newStyle.stroke !== undefined) this.props.stroke = newStyle.stroke;
		if (newStyle.fontName !== undefined) this.props.fontName = newStyle.fontName;
	}

	/**
	 * Change the text's `text`.
	 */
	retype(newText: string) {
		this.props.text = newText;
	}
}
