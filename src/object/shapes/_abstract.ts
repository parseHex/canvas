export default abstract class AbstractObjectShape {
	public readonly shape: Possible.ShapeLabel;
	public _alive: boolean = true;
	public props: Possible.Option;

	/**
	 * @private
	 *
	 * Draws this object to the canvas.
	 */
	abstract _draw(): void;

	/**
	 * Move this object to a specific Coordinate(s).
	 */
	abstract move(newPos: Possible.Position): void;

	/**
	 * Change the dimensions of this object.
	 */
	abstract resize(newDims: Possible.Dimension): void;

	/**
	 * Change the style of this object.
	 */
	abstract restyle(newStyle: Partial<Possible.Style>): void;

	/**
	 * Flags object for deletion. It will be cleared on the next frame.
	 */
	abstract delete(): void;
}
