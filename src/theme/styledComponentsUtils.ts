import { ExecutionContext } from "styled-components";
import { getColorTheme } from "./colorUtils";

export function stSwitchSize(p: ExecutionContext): string {
  return `${p.theme.switch.size}rem`;
}

export function stSwitchToggleSize(p: ExecutionContext): string {
  return `${p.theme.switch.toggleSize}rem`;
}

export function stBorderRadiusSharp(p: ExecutionContext): string {
  return `${p.theme.borderRadiusSharp}rem`;
}

export function stMinXMargin(p: ExecutionContext): string {
  return `${p.theme.margin.minXMargin}rem`;
}

export function stMinYMargin(p: ExecutionContext): string {
  return `${p.theme.margin.minYMargin}rem`;
}

export function stMinXPadding(p: ExecutionContext): string {
  return `${p.theme.padding.minXPadding}rem`;
}

export function stMinYPadding(p: ExecutionContext): string {
  return `${p.theme.padding.minYPadding}rem`;
}

export function stActionTransition(p: ExecutionContext): string {
  return `${p.theme.transition.actionTransition}s`;
}

export function stFocusTransition(p: ExecutionContext): string {
  return `${p.theme.transition.focusTransition}s`;
}

export function stPrimaryColor(p: ExecutionContext): string {
  return getColorTheme(p.theme).primary;
}

export function stSecondaryColor(p: ExecutionContext): string {
  return getColorTheme(p.theme).secondary;
}

export function stAccentColor(p: ExecutionContext): string {
  return getColorTheme(p.theme).accent;
}

export function stTextColor(p: ExecutionContext): string {
  return getColorTheme(p.theme).text;
}

export function stSwitchColor(p: ExecutionContext): string {
  return getColorTheme(p.theme).switch;
}

export function stBackgroundColor(p: ExecutionContext): string {
  return getColorTheme(p.theme).background;
}

export function stBackgroundSecondaryColor(p: ExecutionContext): string {
  return getColorTheme(p.theme).backgroundSecondary;
}

export function stBackgroundAccentColor(p: ExecutionContext): string {
  return getColorTheme(p.theme).backgroundAccent;
}

export function stBorderWidth(p: ExecutionContext): string {
  return `${p.theme.borderWidth}rem`;
}
