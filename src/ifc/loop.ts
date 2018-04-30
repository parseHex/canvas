import { CanvasColor } from './index';

export type Function = (currentFrame: number) => void;

export interface Options {
	loopFunction: Function;
	timing?: boolean;
	clearEachFrame?: boolean;
	background?: CanvasColor;
	framerate?: number;
}
