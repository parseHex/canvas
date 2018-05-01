import { Object } from '../../ifc';
import * as draw from '../../draw';
import BaseObjectShape from './base';

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

	move(newPos: Object.Position.Polygon) {
		for (let i = 0; i < newPos.length; i++) {
			this.props.pos[i].x = newPos[i].x;
			this.props.pos[i].y = newPos[i].y;
		}
	}

	/**
	 * No-Op: Can't resize polygons, must manually move each point using `.move()`
	 */
	resize(newDims: null) {
		console.error('Cannot resize a polygon, use `.move()` instead.');
	}

	restyle(newColors: Partial<Object.Style.Polygon>) {
		if (newColors.fill !== undefined) this.props.fill = newColors.fill;
		if (newColors.stroke !== undefined) this.props.stroke = newColors.stroke;
	}

	delete() {
		this._alive = false;
	}
}
