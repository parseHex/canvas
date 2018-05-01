import { Object } from '../../ifc';
import * as draw from '../../draw';
import BaseObjectShape from './base';

export default class Line extends BaseObjectShape {
	shape = 'line' as Object.Possible.ShapeLabel;
	props: Object.Options.Line;

	constructor(opts: Object.Options.Line) {
		super();

		this.props = opts;
	}

	_draw() {
		draw.line(this.props, true);
	}

	/**
	 * Change the position of the line by moving each of its points.
	 */
	move(newPos: Object.Position.Line) {
		for (let i = 0; i < newPos.length; i++) {
			this.props.pos[i].x = newPos[i].x;
			this.props.pos[i].y = newPos[i].y;
		}
	}

	/**
	 * Change the line's `lineWidth`.
	 */
	resize(newDim: Object.Dimension.Line) {
		this.props.lineWidth = newDim.lineWidth;
	}

	/**
	 * Change the line's `stroke`.
	 */
	restyle(newStyle: Object.Style.Line) {
		this.props.stroke = newStyle.stroke;
	}

	delete() {
		this._alive = false;
	}
}
