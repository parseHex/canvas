interface LineOptions {
	points: Coordinate[];
	lineWidth?: number;
	stroke?: CanvasColor;
}
interface RectangleOptions extends Coordinate {
	width: number;
	height: number;
	fill?: CanvasColor;
	stroke?: CanvasColor;
}
interface TriangleOptions {
	points: [Coordinate, Coordinate, Coordinate];
	fill?: CanvasColor;
	stroke?: CanvasColor;
}
interface EllipseOptions extends Coordinate {
	rx: number;
	ry?: number;
	fill?: CanvasColor;
	stroke?: CanvasColor;
}
interface TextOptions extends Coordinate {
	value: string;
	fontName?: string;
	size?: number;
	fill?: CanvasColor;
	stroke?: CanvasColor;
}
interface PolygonOptions {
	points: Coordinate[];
	fill?: CanvasColor;
	stroke?: CanvasColor;
}
