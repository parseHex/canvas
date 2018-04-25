import { Coordinate, LoopFunction, Shapes } from './index';

export interface Rectangle extends Shapes.Rectangle {
	fill?: string;
	stroke?: string;
}
export interface Circle extends Shapes.Circle {
	fill?: string;
	stroke?: string;
}
export interface Ellipse extends Shapes.Ellipse {
	fill?: string;
	stroke?: string;
}
export interface Line extends Shapes.Line {
	lineWidth?: number;
	stroke?: string;
}
export interface Text extends Coordinate {
	text: string;
	fill?: string;
	stroke?: string;
	fontName?: string;
	sizePX?: number;
}
export interface Loop {
	loopFunction: LoopFunction;
	timing?: boolean;
	clearEachFrame?: boolean;
	background?: string;
	framerate?: number;
}
