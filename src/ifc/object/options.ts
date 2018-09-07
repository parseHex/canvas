namespace ObjectOptions {
	export interface Rectangle extends ObjectDimensions.Rectangle, ObjectStyle.Rectangle {
		pos: ObjectPosition.Rectangle;
	}
	export interface Triangle extends ObjectStyle.Triangle {
		pos: ObjectPosition.Triangle;
	}
	export interface Ellipse extends ObjectDimensions.Ellipse, ObjectStyle.Ellipse {
		pos: ObjectPosition.Ellipse;
	}
	export interface Polygon extends ObjectStyle.Polygon {
		pos: ObjectPosition.Polygon;
	}
	export interface Line extends ObjectDimensions.Line, ObjectStyle.Line {
		pos: ObjectPosition.Line;
	}
	export interface Text extends ObjectDimensions.Text, ObjectStyle.Text {
		pos: ObjectPosition.Text;
		text: string;
	}
	export interface Point extends ObjectStyle.Point {
		pos: ObjectPosition.Point;
	}
}
