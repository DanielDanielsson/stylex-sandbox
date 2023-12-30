import * as stylex from '@stylexjs/stylex';
import { colors } from '../tokens.stylex';

export const light = stylex.createTheme(colors, {
  mainText: { default: 'black' },
  mainBackground: { default: 'white' },
  mainTextInverted: { default: 'white' },
  mainBackgroundInverted: { default: 'black' },
});
