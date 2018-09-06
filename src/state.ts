import BaseObjectShape from './object/shapes/_base';

export interface State {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
	backgroundCanvas: HTMLCanvasElement;
	backgroundCtx: CanvasRenderingContext2D;
	dragging: boolean;
	objects: BaseObjectShape[];
}

const state: State = {
	canvas: null,
	ctx: null,
	backgroundCanvas: null,
	backgroundCtx: null,
	dragging: false,
	objects: [],
};

export default state;
