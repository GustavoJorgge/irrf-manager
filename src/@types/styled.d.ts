import 'styled-components';
import { defaultTheme } from '../styles/theme/default';

type ThemeType = typeof defaultTheme;

/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
