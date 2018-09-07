# `proto-canvas`

A library that handles common `<canvas>` tasks to make prototyping easier.

It's mostly for my own use but I'm trying to keep it organized and easy to use for anyone.

## Importing

```javascript

// ES6
import c from 'proto-canvas';

// CommonJS
const c = require('proto-canvas');

// Global variable via <script> tag
// (you don't need to assign it to the `c` variable, you can use it as `protoCanvas`)
const c = protoCanvas;

```

## Example

```javascript

import c from 'proto-canvas';

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

## [API](./API.md)

## TODO

- More drawable shapes
	- Polygon (generic shape)
- Multiple canvas support

## Development

Scripts:

- `start` watches for changes and builds to `lib/`.
- `build`
- `docs` builds documentation using TypeDoc.
- `clean`
