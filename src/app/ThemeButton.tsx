import React from 'react';
import type { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';
import { dark } from '../config/themes/dark';
import { light } from '../config/themes/light';
import { xmas } from '../config/themes/xmas';
import { colors } from '../config/tokens.stylex';

export type ButtonThemes = 'xmas' | 'light' | 'dark' | 'inherit';

type ThemeButtonProps = {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  theme: ButtonThemes;
  xStyles?: StyleXStyles;
};

export const buttonThemes = [
  {
    label: 'light',
    theme: light,
  },
  { label: 'dark', theme: dark },
  { label: 'xmas', theme: xmas },
  { label: 'inherit', theme: null },
];

const styles = stylex.create({
  base: {
    color: colors.mainTextInverted,
    height: '44px',
    backgroundColor: colors.mainBackgroundInverted,
    cursor: 'pointer',
    border: 'none',
    minWidth: '400px',
  },
});

export const ThemeButton = ({ label, onClick, theme, xStyles }: ThemeButtonProps) => {
  const themes = { dark, xmas, light, inherit: null };

  return (
    <button type="button" onClick={onClick} {...stylex.props(themes[theme], styles.base, xStyles)}>
      {label}
    </button>
  );
};
