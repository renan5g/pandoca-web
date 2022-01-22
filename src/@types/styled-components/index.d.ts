import 'styled-components';

import { myTheme } from '@app/styles/theme';

export type Theme = typeof myTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
