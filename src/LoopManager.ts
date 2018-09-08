import CanvasManager from '.';

export class LoopManager {
	/** Reference to the parent CanvasManager. */
	private canvas: CanvasManager;

	private frame = -1;
	private callbacks: Loop.Function[] = [];
	private options: Loop.Options = <any>{};

	public get currentFrame() { return this.frame; }

	constructor(canvas: CanvasManager) {
		this.canvas = canvas;
		requestAnimationFrame(this.loop.bind(this));
	}

	public add(callback: Loop.Function) {
		this.callbacks.push(callback);
	}

	public updateOptions(options: Loop.Options) {
		Object.assign(this.options, options);
	}

	private loop() {
		if (this.callbacks.length === 0) {
			requestAnimationFrame(this.loop.bind(this));
			return;
		}

		this.frame++;

		for (let i = 0; i < this.callbacks.length; i++) {
			if (!this.callbacks[i]) continue;

			this.callbacks[i](this.frame);
		}

		requestAnimationFrame(this.loop.bind(this));
	}
}
