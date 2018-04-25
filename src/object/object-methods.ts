import * as ifc from '../ifc';

export function move(this: ifc.CanvasObject, newPos: ifc.Coords) {
	if (this.shape === 'line') {
		this.properties.x1 = newPos.x1;
		this.properties.y1 = newPos.y1;
		this.properties.x2 = newPos.x2;
		this.properties.y2 = newPos.y2;
	} else if (this.shape === 'triangle') {
		this.properties.x1 = newPos.x1;
		this.properties.y1 = newPos.y1;
		this.properties.x2 = newPos.x2;
		this.properties.y2 = newPos.y2;
		this.properties.x3 = newPos.x3;
		this.properties.y3 = newPos.y3;
	} else {
		this.properties.x = newPos.x;
		this.properties.y = newPos.y;
	}

	return this;
}
export function resize(this: ifc.CanvasObject, newDims: ifc.Dims) {
	switch (this.shape) {
		case 'rectangle': {
			if (newDims.width) this.properties.width = newDims.width;
			if (newDims.height) this.properties.height = newDims.height;
			break;
		}
		case 'circle': {
			this.properties.rx = newDims.rx;
			this.properties.ry = newDims.ry;
			break;
		}
		case 'ellipse': {
			if (newDims.rx) this.properties.rx = newDims.rx;
			if (newDims.ry) this.properties.ry = newDims.ry;
			break;
		}
		case 'line': {
			this.properties.lineWidth = newDims.lineWidth;
			break;
		}
		case 'text': {
			this.properties.sizePX = newDims.sizePX;
			break;
		}
	}

	return this;
}
export function recolor(this: ifc.CanvasObject, newColors: ifc.Colors) {
	if (this.shape === 'line') {
		this.properties.stroke = newColors.stroke;
	} else {
		if (newColors.fill) this.properties.fill = newColors.fill;
		if (newColors.stroke) this.properties.stroke = newColors.stroke;
	}

	return this;
}
export function deleteObj(this: ifc.CanvasObject) {
	this._dead = true;

	// next internalLoop should clear this object from memory

	return this;
}
