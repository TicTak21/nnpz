import { LyTheme2 } from '@alyle/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const styles = {
  reportName: {
    textAlign: 'center',
  },
  ctrls: {
    margin: '0.5rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

@Component({
  selector: 'admin-report-page',
  templateUrl: './report-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportPageComponent {
  readonly classes = this.theme.addStyleSheet(styles);
  readonly form: FormGroup = new FormGroup({
    name: new FormControl('report', [Validators.required]),
    days: new FormControl(14),
    format: new FormControl('pdf'),
  });

  constructor(private readonly theme: LyTheme2) {}

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

    return `${name.value}_${days.value}_${currentDate}.${format.value}`;
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

  onSubmit() {
    console.log(this.form.value);
  }

  onReset() {
    this.form.reset({ name: 'report', days: 14, format: 'pdf' });
  }
}
