interface Line {
	points: Coordinate[];
	lineWidth?: number;
	stroke?: CanvasColor;
}
interface Rectangle {
	x: number;
	y: number;
	width: number;
	height: number;
	fill?: CanvasColor;
	stroke?: CanvasColor;
}
