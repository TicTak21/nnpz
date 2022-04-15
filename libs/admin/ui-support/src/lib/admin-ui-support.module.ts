import { LyButtonModule } from '@alyle/ui/button';
import { LyFieldModule } from '@alyle/ui/field';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminUiSupportIssueFormComponent } from './support-issue-form/support-issue-form.component';
import { AdminUiSupportTitleComponent } from './support-title/support-title.component';

const COMPONENTS = [
  AdminUiSupportIssueFormComponent,
  AdminUiSupportTitleComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LyFieldModule,
    LyButtonModule,
    LyTypographyModule,
  ],
  exports: [COMPONENTS],
})
export class AdminUiSupportModule {}
