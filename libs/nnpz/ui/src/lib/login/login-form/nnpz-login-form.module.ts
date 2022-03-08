import { LyButtonModule } from '@alyle/ui/button';
import { LyFieldModule } from '@alyle/ui/field';
import { LyIconModule } from '@alyle/ui/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NnpzLoginFormComponent } from './nnpz-login-form.component';

@NgModule({
  declarations: [NnpzLoginFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LyButtonModule,
    LyFieldModule,
    LyIconModule,
  ],
  exports: [NnpzLoginFormComponent],
})
export class NnpzLoginFormModule {}
