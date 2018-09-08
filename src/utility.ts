/**
 * Make a clone of some data by `stringify`-ing and then `parse`-ing it.
 */
export function clone<T>(data: T): T {
	return JSON.parse(JSON.stringify(data));
}
