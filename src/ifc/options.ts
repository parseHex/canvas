import { Coordinate, LoopFunction, Shapes, CanvasColor } from './index';

export interface Rectangle extends Shapes.Rectangle {
	fill?: CanvasColor;
	stroke?: CanvasColor;
}
export interface Triangle extends Shapes.Triangle {
	fill?: CanvasColor;
	stroke?: CanvasColor;
}
export interface Ellipse extends Shapes.Ellipse {
	fill?: CanvasColor;
	stroke?: CanvasColor;
}
export interface Point extends Coordinate {
	fill?: CanvasColor;
	stroke?: CanvasColor;
}
export interface Line extends Shapes.Line {
	lineWidth?: number;
	stroke?: CanvasColor;
}
export interface Text extends Coordinate {
	text: string;
	fill?: CanvasColor;
	stroke?: CanvasColor;
	fontName?: string;
	sizePX?: number;
}
export interface Loop {
	loopFunction: LoopFunction;
	timing?: boolean;
	clearEachFrame?: boolean;
	background?: CanvasColor;
	framerate?: number;
}
