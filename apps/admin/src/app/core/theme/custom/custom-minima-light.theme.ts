import { PartialThemeVariables } from '@alyle/ui';
import { color } from '@alyle/ui/color';

export class CustomMinimaLight implements PartialThemeVariables {
  name = 'minima-light';
  primary = {
    default: color(0xffffff),
    contrast: color(0x3b435a),
  };
  warn = {
    default: color(0xff3d71),
  };
  background = {
    default: color(0xecf0f5),
  };
}
