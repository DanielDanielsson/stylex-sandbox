import * as stylex from '@stylexjs/stylex';
import { colors } from '../tokens.stylex';

// A constant can be used to avoid repeating the media query
const DARK = '@media (prefers-color-scheme: dark)';

// Dark theme
export const dark = stylex.createTheme(colors, {
  mainText: { default: 'white', [DARK]: 'white' },
  mainBackground: { default: 'black', [DARK]: 'dark' },
  mainTextInverted: { default: 'black', [DARK]: 'black' },
  mainBackgroundInverted: { default: 'white', [DARK]: 'white' },
});
