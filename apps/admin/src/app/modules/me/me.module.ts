import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { LyTabsModule } from '@alyle/ui/tabs';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NnpzAvatarModule } from '@nnpz/ui';
import { MeDeleteComponent } from './components/me-delete/me-delete.component';
import { MeEditFormComponent } from './components/me-edit-form/me-edit-form.component';
import { MeProfileComponent } from './components/me-profile/me-profile.component';
import { MePageComponent } from './containers/me-page/me-page.component';
import { MeRoutingModule } from './me-routing.module';

@NgModule({
  declarations: [
    MePageComponent,
    MeProfileComponent,
    MeEditFormComponent,
    MeDeleteComponent,
  ],
  imports: [
    CommonModule,
    MeRoutingModule,
    LyButtonModule,
    NnpzAvatarModule,
    LyTypographyModule,
    LyTabsModule,
    LyIconModule,
  ],
})
export class MeModule {}
