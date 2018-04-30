import * as Position from './position';
import * as Dimension from './dimension';
import * as Style from './style';
import * as Options from './options';

export type Option =
	Options.Rectangle | Options.Ellipse | Options.Triangle |
	Options.Line | Options.Text | Options.Point;

export type Position =
	Position.Rectangle | Position.Ellipse | Position.Triangle |
	Position.Line | Position.Text | Position.Point;

export type Dimension =
	Dimension.Rectangle | Dimension.Ellipse | Dimension.Line | Dimension.Text;

export type Style =
	Style.Rectangle | Style.Ellipse | Style.Triangle | Style.Line |
	Style.Text | Style.Point;

export type ShapeLabel =
	'rectangle' | 'triangle' | 'ellipse' | 'line' | 'text' | 'point';
