import { Object } from '../../ifc';
import * as draw from '../../draw';
import BaseObjectShape from './_base';

export default class Polygon extends BaseObjectShape {
	shape = 'polygon' as Object.Possible.ShapeLabel;
	props: Object.Options.Polygon;

	constructor(opts: Object.Options.Polygon) {
		super();

		this.props = opts;
	}

	_draw() {
		draw.polygon(this.props, true);
	}

	/**
	 * Change the position of the polygon by moving each of its points.
	 */
	move(newPos: Object.Position.Polygon) {
		for (let i = 0; i < newPos.length; i++) {
			this.props.pos[i].x = newPos[i].x;
			this.props.pos[i].y = newPos[i].y;
		}
	}

	/**
	 * No-Op: Can't resize polygons, must manually move each point using `.move()`
	 */
	resize(newDim: null) {
		console.error('Cannot resize a polygon, use `.move()` instead.');
	}

	/**
	 * Change the polygon's `fill` and/or `stroke`.
	 */
	restyle(newStyle: Partial<Object.Style.Polygon>) {
		if (newStyle.fill !== undefined) this.props.fill = newStyle.fill;
		if (newStyle.stroke !== undefined) this.props.stroke = newStyle.stroke;
	}
}
