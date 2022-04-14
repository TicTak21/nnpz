import { LyAvatarModule } from '@alyle/ui/avatar';
import { LyIconModule } from '@alyle/ui/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NnpzAvatarComponent } from './nnpz-avatar.component';

@NgModule({
  declarations: [NnpzAvatarComponent],
  imports: [CommonModule, LyAvatarModule, LyIconModule, RouterModule],
  exports: [NnpzAvatarComponent],
})
export class NnpzAvatarModule {}
