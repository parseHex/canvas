import * as draw from '../../draw';
import BaseObjectShape from './_base';

export default class Line extends BaseObjectShape {
	shape = 'line' as Possible.ShapeLabel;
	props: ObjectOptions.Line;

	constructor(opts: ObjectOptions.Line) {
		super();

		this.props = opts;
	}

	_draw() {
		draw.line(this.props, true);
	}

	/**
	 * Change the position of the line by moving each of its points.
	 */
	move(newPos: ObjectPosition.Line) {
		for (let i = 0; i < newPos.length; i++) {
			this.props.pos[i].x = newPos[i].x;
			this.props.pos[i].y = newPos[i].y;
		}
	}

	/**
	 * Change the line's `lineWidth`.
	 */
	resize(newDim: ObjectDimensions.Line) {
		this.props.lineWidth = newDim.lineWidth;
	}

	/**
	 * Change the line's `stroke`.
	 */
	restyle(newStyle: ObjectStyle.Line) {
		this.props.stroke = newStyle.stroke;
	}
}
