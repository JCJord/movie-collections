import { AbstractControl } from '@angular/forms';

export function getErrorMessage(control: AbstractControl | null): string | null {
  if (control && control.touched && control.invalid) {
    if (control.errors?.['required']) {
      return 'This field is required.';
    }
    if (control.errors?.['minlength']) {
      return `Minimum ${control.errors['minlength'].requiredLength} characters required.`;
    }
    if (control.errors?.['pattern']) {
      return 'Only alphanumeric characters allowed.';
    }
  }

  return null;
}