interface State {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
	backgroundCanvas: HTMLCanvasElement;
	backgroundCtx: CanvasRenderingContext2D;
	dragging: boolean;
	objects: import('../object/shapes/_base').default[];
}
