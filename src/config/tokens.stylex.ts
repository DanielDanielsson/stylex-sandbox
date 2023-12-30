import * as stylex from '@stylexjs/stylex';

const DARK = '@media (prefers-color-scheme: dark)';

export const colors = stylex.defineVars({
  mainText: { default: 'black', [DARK]: 'white' },
  mainBackground: { default: 'white', [DARK]: 'black' },
  mainTextInverted: { default: 'white', [DARK]: 'black' },
  mainBackgroundInverted: { default: 'black', [DARK]: 'white' },
});

// TODO: Try this out as designsystem
export const spacing = stylex.defineVars({
  none: '0px',
  xsmall: '4px',
  small: '8px',
  medium: '12px',
  large: '20px',
  xlarge: '32px',
  xxlarge: '48px',
  xxxlarge: '96px',
});
