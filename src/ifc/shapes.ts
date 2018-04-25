import { Coordinate } from './index';

export interface Rectangle extends Coordinate {
	width: number;
	height: number;
}
export interface Circle extends Coordinate {
	rx: number;
}
export interface Ellipse extends Circle {
	ry: number;
}
export interface Line {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
}
