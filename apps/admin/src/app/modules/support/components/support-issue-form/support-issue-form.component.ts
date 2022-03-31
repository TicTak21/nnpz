import { LyTheme2 } from '@alyle/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const styles = {
  ctrls: {
    margin: '0.5rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

@Component({
  selector: 'admin-support-issue-form',
  templateUrl: './support-issue-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportIssueFormComponent {
  readonly classes = this.theme.addStyleSheet(styles);

  readonly maxCommentLength = 256;
  readonly form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    comment: new FormControl('', [Validators.maxLength(this.maxCommentLength)]),
  });

  constructor(private readonly theme: LyTheme2) {}

  get title() {
    return this.form.get('title') as FormControl;
  }

  get comment() {
    return this.form.get('comment') as FormControl;
  }

  handleReset() {
    this.form.reset();
  }

  handleSubmit() {
    console.log(this.form.value);
  }
}
