namespace ObjectPartialOptions {
	export type Rectangle =
		{ pos: ObjectPosition.Rectangle } &
		ObjectDimensions.Rectangle &
		Partial<ObjectStyle.Rectangle>;

	export type Triangle =
		{ pos: ObjectPosition.Triangle } &
		Partial<ObjectStyle.Triangle>;

	export type Ellipse =
		{ pos: ObjectPosition.Ellipse } &
		ObjectDimensions.Ellipse &
		Partial<ObjectStyle.Ellipse>;

	export type Line =
		{ pos: ObjectPosition.Line } &
		Partial<ObjectDimensions.Line> &
		Partial<ObjectStyle.Line>;

	export type Text =
		{ pos: ObjectPosition.Text, text: string } &
		Partial<ObjectDimensions.Text> &
		Partial<ObjectStyle.Text>;

	export type Point =
		{ pos: ObjectPosition.Point } &
		Partial<ObjectStyle.Point>;

	export type Polygon =
		{ pos: ObjectPosition.Polygon } &
		Partial<ObjectStyle.Polygon>;
}
