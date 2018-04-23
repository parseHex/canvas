# `canvas`

A small library that handles common tasks with the HTML5 `<canvas>`.

It's mostly for my own use but I'm trying to keep it organized and easy to use for anyone.

## Example

```javascript

import * as c from 'canvas';

// set the canvas element
c.setCanvas(document.getElementById('main'));

function loop(currentFrame) {
	// loop is called every frame (or slower if framerate is set in loop options)

	// get the 2d context of the canvas
	const ctx = c.getContext();

	const canvasWidth = ctx.canvas.width;
	const canvasHeight = ctx.canvas.height;

	// draw a light blue (with dark blue border) rectangle at a random coordinate
	c.draw.rect({
		x: Math.floor(Math.random() * canvasWidth),
		y: Math.floor(Math.random() * canvasHeight),
		width: 45,
		height: 30,
		fill: 'lightblue',
		stroke: 'darkblue',
	});
}

// setup the loop
c.setLoop({
	loopFunction: loop,

	// the following are the options and their default values
	clearEachFrame: false, // (if true) clear the canvas before calling loopFunction
	timing: false, // (if true) show how long each frame takes in the bottom left corner
	background: 'white', // the color of the background
	framerate: 60, // the desired frame rate; changes how often loopFunction is called; may not be accurate
});

// add a handler for the user dragging the mouse over the canvas
c.onDrag(function (mousePos) {
	// draw a circle under the cursor
	c.draw.circle({
		x: mousePos.x,
		y: mousePos.y,
		rx: 5,
		fill: 'maroon',
	});
});

```

## API

```javascript
import * as c from 'canvas';
```

### `c.setCanvas(canvasEl: HTMLCanvasElement): void`
Set the canvas element. Should probably the first thing you do.

### `c.getContext(): CanvasRenderingContext2D`
Get a reference to the canvas's context.

### `c.setLoop(opts: LoopOptions): void`
Set a loop that should be called continuously. See the example above for the options.

### `c.draw.rect(opts: ifc.RectOptions): void`

### `c.draw.circle(opts: ifc.EllipseOptions): void`

### `c.draw.ellipse(opts: ifc.EllipseOptions): void`

### `c.draw.line(opts: ifc.LineOptions): void`

### `c.draw.text(opts: ifc.TextOptions): void`

### `c.utility.clear(): void`
Clear the canvas.

### `c.utility.resetTransform(): void`
Reset the canvas context's transform.

### `c.utility.onClick(handler: (mousePos: ifc.Coordinate) => void): void`
Set a handler to be called when the canvas is clicked. The handler will be called with an object containing the `x` and `y` coordinate of the cursor on the canvas.

### `c.utility.onDrag(handler: (mousePos: ifc.Coordinate) => void): void`
Same as `onClick` except for dragging. The handler will be called when the user first presses the mouse button, and every time the move the mouse with the button still down (or as often as JavaScript send the `mousemove` event).

## Development

- `yarn start` to start watching source files
- `yarn build` to build the script to `./dist`
