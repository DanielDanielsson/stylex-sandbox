import React from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

type ThemeButtonProps = {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  xStyles?: StyleXStyles;
};

const styles = stylex.create({
  base: {
    color: 'white',
    height: '44px',
    backgroundColor: 'black',
    cursor: 'pointer',
    border: 'none',
    minWidth: '400px',
  },
});

export const ThemeButton = ({ label, onClick, xStyles }: ThemeButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    {...stylex.props(styles.base, xStyles)}
  >
    {label}
  </button>
);
