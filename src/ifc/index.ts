import * as Shapes from './shapes';
import * as Options from './options';

export interface Coordinate {
	x: number;
	y: number;
}

export type LoopFunction = (currentFrame: number) => void;

/**
 * Options object for a shape.
 */
export type UniversalObjectProperties = any;

export type PossibleShapes =
	'rectangle' | 'triangle' | 'circle' | 'ellipse' | 'line' | 'text';

/**
 * `{ x: number, y: number }` for any shape except for Lines.
 *
 * `{ x: number, y: number, x2: number, y2: number }` for Lines.
 *
 * **_(WIP)_**
 */
export type Coords = any;

/**
 * `{ width?: number, height?: number }` for Rectangles.
 *
 * `{ rx: number }` for Circles.
 *
 * `{ rx?: number, ry?: number }` for Ellipses.
 *
 * `{ lineWidth: number }` for Lines.
 *
 * `{ sizePX: number }` for Text.
 *
 * **_(WIP)_**
 */
export type Dims = any;

/**
 * `{ fill?: string, stroke?: string }` for every shape except for Lines.
 *
 * `{ stroke?: string }` for Lines.
 */
export type Colors = any;

export interface CanvasObject {
	shape: PossibleShapes;
	properties: UniversalObjectProperties;
	_dead: boolean;
	move: (newPos: Coords) => this;
	resize: (newDims: Dims) => this;
	recolor: (newColors: Colors) => this;
	delete: () => this;
}

export { Shapes, Options };
