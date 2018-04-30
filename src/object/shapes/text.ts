import { Object } from '../../ifc';
import * as draw from '../../draw';
import BaseObjectShape from './base';

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

	resize(newDims: Object.Dimension.Text) {
		this.props.sizePX = newDims.sizePX;
	}

	restyle(newColors: Partial<Object.Style.Text>) {
		if (newColors.fill !== undefined) this.props.fill = newColors.fill;
		if (newColors.stroke !== undefined) this.props.stroke = newColors.stroke;
		if (newColors.fontName !== undefined) this.props.fontName = newColors.fontName;
	}

	delete() {
		this._alive = false;
	}
}
