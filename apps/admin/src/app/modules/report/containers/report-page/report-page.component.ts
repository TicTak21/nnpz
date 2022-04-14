import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IReportDto } from '@nnpz/shared/types';

@Component({
  selector: 'admin-report-page',
  templateUrl: './report-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportPageComponent {
  handleSubmit(reportDto: IReportDto) {
    console.log(reportDto);
  }
}
