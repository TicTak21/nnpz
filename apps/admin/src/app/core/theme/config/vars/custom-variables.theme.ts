import { PartialThemeVariables } from '@alyle/ui';

export class CustomGlobalVariables implements PartialThemeVariables {
  typography = {
    fontFamily: `'Open Sans', sans-serif`,
  };
  borderRadius = {
    default: '6px',
  };
}
