import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export class CustomValidators {
  static match(
    firstControlName: string,
    secondControlName: string,
  ): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
      const firstControl = form.get(firstControlName) as FormControl;
      const secondControl = form.get(secondControlName) as FormControl;

      const firstControlValue: string = firstControl.value;
      const secondControlValue: string = secondControl.value;

      if (firstControlValue !== secondControlValue) {
        const errors: ValidationErrors = { mismatch: true };
        secondControl.setErrors(errors);

        return errors;
      }

      return null;
    };
  }

  static conditionalRequired(condition: boolean): ValidatorFn {
    return (ctrl: AbstractControl): ValidationErrors | null => {
      if (condition) return Validators.required(ctrl);

      return null;
    };
  }
}
