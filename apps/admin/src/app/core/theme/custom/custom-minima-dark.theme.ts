import { PartialThemeVariables } from '@alyle/ui';
import { color } from '@alyle/ui/color';

export class CustomMinimaDark implements PartialThemeVariables {
  name = 'minima-dark';
  primary = {
    default: color(0x212c45),
    contrast: color(0xffffff),
  };
  accent = {
    default: color(0x28428b),
  };
  warn = {
    default: color(0xff3d71),
  };
  background = {
    default: color(0x151a2f),
  };
  paper = {
    default: color(0x212c45),
  };
}
