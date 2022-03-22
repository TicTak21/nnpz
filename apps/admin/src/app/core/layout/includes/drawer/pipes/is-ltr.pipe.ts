import { Dir } from '@alyle/ui';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'isLtr' })
export class IsLtrPipe implements PipeTransform {
  transform(dir: Dir): boolean {
    return dir === Dir.ltr;
  }
}
