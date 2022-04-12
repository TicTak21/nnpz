import { LyButtonModule } from '@alyle/ui/button';
import { LyFieldModule } from '@alyle/ui/field';
import { LyIconModule } from '@alyle/ui/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NnpzRegisterFormComponent } from './nnpz-register-form.component';

@NgModule({
  declarations: [NnpzRegisterFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LyButtonModule,
    LyFieldModule,
    LyIconModule,
  ],
  exports: [NnpzRegisterFormComponent],
})
export class NnpzRegisterFormModule {}
