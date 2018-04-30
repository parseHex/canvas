import * as Object from './object';
import * as Loop from './loop';

export interface Coordinate {
	x: number;
	y: number;
}

export interface FillAndStroke {
	fill: CanvasColor;
	stroke: CanvasColor;
}

export type CanvasColor = string | CanvasGradient | CanvasPattern;

export { Loop, Object };
