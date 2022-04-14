import { LyCommonModule } from '@alyle/ui';
import { LyButtonModule } from '@alyle/ui/button';
import { LyCardModule } from '@alyle/ui/card';
import { LyIconModule } from '@alyle/ui/icon';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NnpzPizzaCardComponent } from './nnpz-pizza-card.component';

@NgModule({
  declarations: [NnpzPizzaCardComponent],
  imports: [
    CommonModule,
    LyCommonModule,
    LyCardModule,
    LyTypographyModule,
    LyButtonModule,
    LyIconModule,
  ],
  exports: [NnpzPizzaCardComponent],
})
export class NnpzPizzaCardModule {}
