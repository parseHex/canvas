export interface Coordinate {
	x: number;
	y: number;
}
export interface Rectangle extends Coordinate {
	width: number;
	height: number;
}
export interface Ellipse extends Coordinate {
	rx: number;
	ry?: number; // don't set to get a circle
}

export interface RectOptions extends Rectangle {
	fill?: string;
	stroke?: string;
}
export interface EllipseOptions extends Ellipse {
	fill?: string;
	stroke?: string;
}
export interface TextOptions extends Coordinate {
	text: string;
	color?: string;
	fontName?: string;
	sizePX?: number;
}
export interface LineOptions {
	point1: Coordinate;
	point2: Coordinate;
	lineWidth?: number;
	color?: string;
}
