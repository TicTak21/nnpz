import { PartialThemeVariables } from '@alyle/ui';
import { color } from '@alyle/ui/color';

export class CustomMinimaDark implements PartialThemeVariables {
  name = 'minima-dark';
  warn = {
    default: color(0xff3d71),
  };
}
