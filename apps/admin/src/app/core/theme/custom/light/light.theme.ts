import { PartialThemeVariables } from '@alyle/ui';
import {
  LightAccentDefault,
  LightBackgroundDefault,
  LightPrimaryContrast,
  LightPrimaryDefault,
  LightWarnDefault,
} from './light-colors.theme';

export class CustomMinimaLight implements PartialThemeVariables {
  name = 'minima-light';
  primary = {
    default: LightPrimaryDefault,
    contrast: LightPrimaryContrast,
  };
  accent = {
    default: LightAccentDefault,
  };
  warn = {
    default: LightWarnDefault,
  };
  background = {
    default: LightBackgroundDefault,
  };
}
