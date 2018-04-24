# API

`TODO: Generate API docs`

```javascript
import * as c from 'proto-canvas';
```

## `c.setCanvas(canvasEl: HTMLCanvasElement): void`
Set the canvas element. Should probably the first thing you do.

## `c.getContext(): CanvasRenderingContext2D`
Get a reference to the canvas's context.

## `c.setLoop(opts: LoopOptions): void`
Set a loop that should be called continuously. See the example above for the options.

## `c.draw.rect(opts: ifc.RectOptions): void`

## `c.draw.circle(opts: ifc.EllipseOptions): void`

## `c.draw.ellipse(opts: ifc.EllipseOptions): void`

## `c.draw.line(opts: ifc.LineOptions): void`

## `c.draw.text(opts: ifc.TextOptions): void`

## `c.utility.clear(): void`
Clear the canvas.

## `c.utility.resetTransform(): void`
Reset the canvas context's transform.

## `c.utility.onClick(handler: (mousePos: ifc.Coordinate) => void): void`
Set a handler to be called when the canvas is clicked. The handler will be called with an object containing the `x` and `y` coordinate of the cursor on the canvas.

## `c.utility.onDrag(handler: (mousePos: ifc.Coordinate) => void): void`
Same as `onClick` except for dragging. The handler will be called when the user first presses the mouse button, and every time the move the mouse with the button still down (or as often as JavaScript send the `mousemove` event).
