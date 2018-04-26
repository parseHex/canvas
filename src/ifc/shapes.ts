import { Coordinate } from './index';

export interface Rectangle extends Coordinate {
	width: number;
	height: number;
}
export interface Triangle {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	x3: number;
	y3: number;
}
export interface Ellipse extends Coordinate {
	rx: number;
	ry: number;
}
export interface Line {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
}
