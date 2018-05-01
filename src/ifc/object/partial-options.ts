import * as Position from './position';
import * as Dimension from './dimension';
import * as Style from './style';

export type Rectangle =
	{ pos: Position.Rectangle } &
	Dimension.Rectangle &
	Partial<Style.Rectangle>;

export type Triangle =
	{ pos: Position.Triangle } &
	Partial<Style.Triangle>;

export type Ellipse =
	{ pos: Position.Ellipse } &
	Dimension.Ellipse &
	Partial<Style.Ellipse>;

export type Line =
	{ pos: Position.Line } &
	Partial<Dimension.Line> &
	Partial<Style.Line>;

export type Text =
	{ pos: Position.Text, text: string } &
	Partial<Dimension.Text> &
	Partial<Style.Text>;

export type Point =
	{ pos: Position.Point } &
	Partial<Style.Point>;

export type Polygon =
	{ pos: Position.Polygon } &
	Partial<Style.Polygon>;
