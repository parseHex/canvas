import AbstractObjectShape from './_abstract';

export default class BaseObjectShape extends AbstractObjectShape {
	_draw() {
		// call c.draw method for whatever shape this is
	}

	move(newPos: Possible.Position) {
		//
	}

	resize(newDims: Possible.Dimension) {
		//
	}

	restyle(newStyle: Partial<Possible.Style>) {
		//
	}

	delete() {
		this._alive = false;
	}
}
