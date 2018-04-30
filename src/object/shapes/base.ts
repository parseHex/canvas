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

	abstract move(newPos: Object.Possible.Position): void;
	abstract resize(newDims: Object.Possible.Dimension): void;
	abstract restyle(newColors: Partial<Object.Possible.Style>): void;

	/**
	 * Flags object for deletion. It will be cleared on the next frame.
	 */
	abstract delete(): void;
}
