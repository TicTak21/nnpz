import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EReportFormat, IReportDto } from '@nnpz/shared/util';

@Component({
  selector: 'admin-ui-report-form',
  templateUrl: './report-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiReportFormComponent {
  @Output() handleSubmit$: EventEmitter<IReportDto> =
    new EventEmitter<IReportDto>();

  readonly form: FormGroup = new FormGroup({
    name: new FormControl('report'),
    days: new FormControl(14),
    format: new FormControl(EReportFormat.pdf),
  });

  get name() {
    return this.form.get('name') as FormControl;
  }

  get days() {
    return this.form.get('days') as FormControl;
  }

  get format() {
    return this.form.get('format') as FormControl;
  }

  get docName() {
    const { name, days, format, currentDate } = this;

    if (!name.value) return `${days.value}d_${currentDate}.${format.value}`;

    return `${name.value}_${days.value}d_${currentDate}.${format.value}`;
  }

  get currentDate(): string {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };

    const formatted = new Intl.DateTimeFormat('en-US', options).format(date);
    const replaced = formatted.replace(/\/|:/gi, '-').replace(/,\s+/gi, '_');

    return replaced;
  }

  handleSubmit() {
    this.handleSubmit$.emit(this.form.value);
  }

  handleReset() {
    this.form.reset({
      name: 'report',
      days: 14,
      format: EReportFormat.pdf,
    });
  }
}
