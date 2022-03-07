import { LyButtonModule } from '@alyle/ui/button';
import { LyFieldModule } from '@alyle/ui/field';
import { LyGridModule } from '@alyle/ui/grid';
import { LyTypographyModule } from '@alyle/ui/typography';
import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SupportIssueFormComponent } from './components/support-issue-form/support-issue-form.component';
import { SupportTitleComponent } from './components/support-title/support-title.component';
import { SupportPageComponent } from './containers/support-page/support-page.component';
import { SupportRoutingModule } from './support-routing.module';

@NgModule({
  declarations: [
    SupportPageComponent,
    SupportIssueFormComponent,
    SupportTitleComponent,
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    LyButtonModule,
    LyFieldModule,
    LyTypographyModule,
    ReactiveFormsModule,
    TextFieldModule,
    LyGridModule,
  ],
})
export class SupportModule {}
