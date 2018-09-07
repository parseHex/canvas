interface Coordinate {
	x: number;
	y: number;
}

interface FillAndStroke {
	fill: CanvasColor;
	stroke: CanvasColor;
}

type CanvasColor = string | CanvasGradient | CanvasPattern;

type MouseEventHandler = (
	/** The canvas-relative position of the mouse. */
	mousePosition: Coordinate
) => void;
