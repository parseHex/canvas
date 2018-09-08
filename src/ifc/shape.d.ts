interface Line {
	points: Coordinate[];
	lineWidth?: number;
	stroke?: CanvasColor;
}
interface Rectangle extends Coordinate {
	width: number;
	height: number;
	fill?: CanvasColor;
	stroke?: CanvasColor;
}
interface Triangle {
	points: [Coordinate, Coordinate, Coordinate];
	fill?: CanvasColor;
	stroke?: CanvasColor;
}
interface Ellipse extends Coordinate {
	rx: number;
	ry?: number;
	fill?: CanvasColor;
	stroke?: CanvasColor;
}
