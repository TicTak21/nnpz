import { LyAvatarModule } from '@alyle/ui/avatar';
import { LyIconModule } from '@alyle/ui/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarComponent } from './containers/avatar/avatar.component';

@NgModule({
  declarations: [AvatarComponent],
  imports: [CommonModule, LyAvatarModule, LyIconModule, RouterModule],
  exports: [AvatarComponent],
})
export class AvatarModule {}
