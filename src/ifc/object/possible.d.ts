declare namespace Possible {
	export type Option =
		ObjectOptions.Rectangle | ObjectOptions.Ellipse | ObjectOptions.Triangle |
		ObjectOptions.Line | ObjectOptions.Text | ObjectOptions.Point | ObjectOptions.Polygon;

	export type Position =
		ObjectPosition.Rectangle | ObjectPosition.Ellipse | ObjectPosition.Triangle |
		ObjectPosition.Line | ObjectPosition.Text | ObjectPosition.Point | ObjectPosition.Polygon;

	export type Dimension =
		ObjectDimensions.Rectangle | ObjectDimensions.Ellipse | ObjectDimensions.Line | ObjectDimensions.Text;

	export type Style =
		ObjectStyle.Rectangle | ObjectStyle.Ellipse | ObjectStyle.Triangle | ObjectStyle.Line |
		ObjectStyle.Text | ObjectStyle.Point | ObjectStyle.Polygon;

	export type ShapeLabel =
		'rectangle' | 'triangle' | 'ellipse' | 'line' | 'text' | 'point' | 'polygon';
}
