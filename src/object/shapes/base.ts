import { PossibleShapes, PossibleOptions } from '../../ifc';

export default abstract class BaseObjectShape {
	public readonly shape: PossibleShapes;
	public _alive: boolean = true;
	public props: PossibleOptions;

	/**
	 * Draws this object to the canvas.
	 *
	 * **This is an internal function**: you don't ever need to call this but go ahead if you really want to.
	 */
	abstract _draw(): void;

	abstract move(newPos: Partial<PossibleOptions>): void;
	abstract resize(newDims: Partial<PossibleOptions>): void;
	abstract restyle(newColors: Partial<PossibleOptions>): void;

	/**
	 * Flags object for deletion. It will be cleared on the next frame.
	 */
	abstract delete(): void;
}
