import { NgModule } from '@angular/core';
import { IsDarkModePipe } from './pipes/is-dark-mode/is-dark-mode.pipe';
import { IsLtrPipe } from './pipes/is-ltr/is-ltr.pipe';

const PIPES = [IsLtrPipe, IsDarkModePipe];

@NgModule({
  declarations: [PIPES],
  exports: [PIPES],
})
export class SharedUtilModule {}
