import * as Shapes from './shapes';
import * as Options from './options';

export interface Coordinate {
	x: number;
	y: number;
}
export type LoopFunction = (currentFrame: number) => void;

export { Shapes, Options };
