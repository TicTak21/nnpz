import { LyTheme2 } from '@alyle/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

const styles = {
  ctrls: {
    margin: '0.5rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

@Component({
  selector: 'admin-ui-support-issue-form',
  templateUrl: './support-issue-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUiSupportIssueFormComponent {
  readonly classes = this.theme.addStyleSheet(styles);

  readonly maxCommentLength = 256;
  readonly form = new UntypedFormGroup({
    title: new UntypedFormControl('', [Validators.required]),
    comment: new UntypedFormControl('', [Validators.maxLength(this.maxCommentLength)]),
  });

  constructor(private readonly theme: LyTheme2) {}

  get title() {
    return this.form.get('title') as UntypedFormControl;
  }

  get comment() {
    return this.form.get('comment') as UntypedFormControl;
  }

  handleReset() {
    this.form.reset();
  }

  handleSubmit() {
    console.log(this.form.value);
  }
}
