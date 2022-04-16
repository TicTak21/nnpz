import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IReportDto } from '@nnpz/shared/types';

@Component({
  selector: 'admin-feature-report-page',
  templateUrl: './report-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFeatureReportPageComponent {
  handleSubmit(reportDto: IReportDto) {
    console.log(reportDto);
  }
}
