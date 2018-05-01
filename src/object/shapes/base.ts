import { Object, Coordinate } from '../../ifc';

export default abstract class BaseObjectShape {
	public readonly shape: Object.Possible.ShapeLabel;
	public _alive: boolean = true;
	public props: Object.Possible.Option;

	/**
	 * Draws this object to the canvas.
	 *
	 * **This is an internal function**: you don't ever need to call this but go ahead if you really want to.
	 */
	abstract _draw(): void;

	/**
	 * Move this object to a specific Coordinate(s).
	 */
	abstract move(newPos: Object.Possible.Position): void;

	/**
	 * Change the dimensions of this object.
	 */
	abstract resize(newDims: Object.Possible.Dimension): void;

	/**
	 * Change the style of this object.
	 */
	abstract restyle(newStyle: Partial<Object.Possible.Style>): void;

	/**
	 * Flags object for deletion. It will be cleared on the next frame.
	 */
	abstract delete(): void;
}
