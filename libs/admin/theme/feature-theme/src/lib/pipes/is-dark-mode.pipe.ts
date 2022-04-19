import { Pipe, PipeTransform } from '@angular/core';
import { EThemes } from '@nnpz/shared/types';

@Pipe({ name: 'isDarkMode' })
export class IsDarkModePipe implements PipeTransform {
  transform(theme: EThemes): boolean {
    return theme === EThemes.dark;
  }
}
