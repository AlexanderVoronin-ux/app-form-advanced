import {AbstractControl} from "@angular/forms";

export function emailValidators(control: AbstractControl): {[key: string]: any} {
const value = control.value;
const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})$/;
const result = emailRegex.test(value);
if (!result) {
  return {emailValidators: {value}}
}
return null
}

export function rangeValidator(minValue: number, maxValue: number): {[key: string]: any} {
return (control: AbstractControl) => {
  const value = control.value;
  if (isNaN(value)) {
    return {rangeValidator: {value}};
  }
  if (value < minValue || value > maxValue) {
    return {rangeValidator: {value}};
  }
  return null;
}
}
