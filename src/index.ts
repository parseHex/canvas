import { LoopManager } from './LoopManager';
import { MouseManager } from './MouseManager';
import { DrawManager } from './DrawManager';

export default class CanvasManager {
	public readonly element: HTMLCanvasElement;
	public readonly ctx: CanvasRenderingContext2D;

	public loop: LoopManager;
	public mouse: MouseManager;
	/** For drawing primitive stateless shapes. */
	public draw: DrawManager;

	public get width() { return this.element.width; }
	public get height() { return this.element.height; }

	constructor(canvasElement: HTMLCanvasElement) {
		this.element = canvasElement;
		this.ctx = this.element.getContext('2d');

		this.loop = new LoopManager(this);
		this.mouse = new MouseManager(this);
		this.draw = new DrawManager(this);
	}

	public clear() {
		this.ctx.clearRect(0, 0, this.width, this.height);
	}

	public resetTransform() {
		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
	}
}

import * as utility from './utility';
export { utility };

// const c = new CanvasManager(document.createElement('canvas'));
