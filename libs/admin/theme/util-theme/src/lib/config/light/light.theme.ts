import { Dir, PartialThemeVariables } from '@alyle/ui';
import { color } from '@alyle/ui/color';
import {
  LightAccentDefault,
  LightBackgroundDefault,
  LightPrimaryContrast,
  LightWarnDefault,
} from './light-colors.theme';

export class CustomMinimaLight implements PartialThemeVariables {
  name = 'minima-light';
  direction = Dir.ltr;
  primary = {
    default: color(0xd8e2ff),
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
