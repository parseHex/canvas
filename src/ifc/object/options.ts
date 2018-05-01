import * as Position from './position';
import * as Dimension from './dimension';
import * as Style from './style';

export interface Rectangle extends Dimension.Rectangle, Style.Rectangle {
	pos: Position.Rectangle;
}
export interface Triangle extends Style.Triangle {
	pos: Position.Triangle;
}
export interface Ellipse extends Dimension.Ellipse, Style.Ellipse {
	pos: Position.Ellipse;
}
export interface Polygon extends Style.Polygon {
	pos: Position.Polygon;
}
export interface Line extends Dimension.Line, Style.Line {
	pos: Position.Line;
}
export interface Text extends Dimension.Text, Style.Text {
	pos: Position.Text;
	text: string;
}
export interface Point extends Style.Point {
	pos: Position.Point;
}
