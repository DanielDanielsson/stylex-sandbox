import * as stylex from '@stylexjs/stylex';
import { colors } from '../tokens.stylex';

export const xmas = stylex.createTheme(colors, {
  mainText: { default: 'white' },
  mainBackground: { default: 'red' },
  mainTextInverted: { default: 'red' },
  mainBackgroundInverted: { default: 'white' },
});
