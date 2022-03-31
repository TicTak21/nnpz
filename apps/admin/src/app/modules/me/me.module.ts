import { LyButtonModule } from '@alyle/ui/button';
import { LyFieldModule } from '@alyle/ui/field';
import { LyGridModule } from '@alyle/ui/grid';
import { LyIconModule } from '@alyle/ui/icon';
import { LySelectModule } from '@alyle/ui/select';
import { LyTabsModule } from '@alyle/ui/tabs';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NnpzAvatarModule } from '@nnpz/ui';
import { MeEditFormComponent } from './components/me-edit-form/me-edit-form.component';
import { MeProfileComponent } from './components/me-profile/me-profile.component';
import { MePageComponent } from './containers/me-page/me-page.component';
import { MeRoutingModule } from './me-routing.module';

@NgModule({
  declarations: [MePageComponent, MeProfileComponent, MeEditFormComponent],
  imports: [
    CommonModule,
    MeRoutingModule,
    LyButtonModule,
    NnpzAvatarModule,
    LyTypographyModule,
    LyTabsModule,
    LyIconModule,
    LyGridModule,
    LyFieldModule,
    LySelectModule,
    ReactiveFormsModule,
  ],
})
export class MeModule {}
