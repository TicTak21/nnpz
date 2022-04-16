import { LyButtonModule } from '@alyle/ui/button';
import { LyFieldModule } from '@alyle/ui/field';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NnpzAvatarModule } from '@nnpz/shared/ui';
import { AdminUiMeEditFormComponent } from './me-edit-form/me-edit-form.component';
import { AdminUiMeProfileComponent } from './me-profile/me-profile.component';

const COMPONENTS = [AdminUiMeEditFormComponent, AdminUiMeProfileComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    NnpzAvatarModule,
    ReactiveFormsModule,
    LyFieldModule,
    LyTypographyModule,
    LyButtonModule,
  ],
  exports: [COMPONENTS],
})
export class AdminUiMeModule {}
