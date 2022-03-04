import { lyl, PartialThemeVariables } from '@alyle/ui';
import {
  DarkAccentDefault,
  DarkBackgroundDefault,
  DarkMenuBackground,
  DarkPaperDefault,
  DarkPrimaryContrast,
  DarkPrimaryDefault,
  DarkWarnDefault,
} from './dark-colors.theme';

export class CustomMinimaDark implements PartialThemeVariables {
  name = 'minima-dark';
  primary = {
    default: DarkPrimaryDefault,
    contrast: DarkPrimaryContrast,
  };
  accent = {
    default: DarkAccentDefault,
  };
  warn = {
    default: DarkWarnDefault,
  };
  background = {
    default: DarkBackgroundDefault,
  };
  paper = {
    default: DarkPaperDefault,
  };
  menu = {
    root: (__: any) => lyl`{
      ${__.container} {
        background: ${DarkMenuBackground}
      }
    }`,
  };
}
