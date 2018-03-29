export interface State {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
	backgroundCanvas: HTMLCanvasElement;
	backgroundCtx: CanvasRenderingContext2D;
}

const state: State = {
	canvas: null,
	ctx: null,
	backgroundCanvas: null,
	backgroundCtx: null,
};

export default state;
