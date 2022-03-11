import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IReportDto } from '@nnpz/types';

@Component({
  selector: 'admin-report-page',
  templateUrl: './report-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportPageComponent {
  onSubmit(reportDto: IReportDto) {
    console.log(reportDto);
  }
}
