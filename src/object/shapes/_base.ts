import AbstractObjectShape from './_abstract';
import { Object, Coordinate } from '../../ifc';

export default class BaseObjectShape extends AbstractObjectShape {
	_draw() {
		// call c.draw method for whatever shape this is
	}

	move(newPos: Object.Possible.Position) {
		//
	}

	resize(newDims: Object.Possible.Dimension) {
		//
	}

	restyle(newStyle: Partial<Object.Possible.Style>) {
		//
	}

	delete() {
		this._alive = false;
	}
}
