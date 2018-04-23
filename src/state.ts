export interface State {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
	backgroundCanvas: HTMLCanvasElement;
	backgroundCtx: CanvasRenderingContext2D;
	dragging: boolean;
}

const state: State = {
	canvas: null,
	ctx: null,
	backgroundCanvas: null,
	backgroundCtx: null,
	dragging: false,
};

export default state;
