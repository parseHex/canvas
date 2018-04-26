import * as Shapes from './shapes';
import * as Options from './options';

export interface Coordinate {
	x: number;
	y: number;
}

export type LoopFunction = (currentFrame: number) => void;

export type PossibleOptions =
	Options.Rectangle | Options.Ellipse | Options.Triangle |
	Options.Line | Options.Text;

export type PossibleShapes =
	'rectangle' | 'triangle' | 'ellipse' | 'line' | 'text';

export type CanvasColor = string | CanvasGradient | CanvasPattern;

export { Shapes, Options };
