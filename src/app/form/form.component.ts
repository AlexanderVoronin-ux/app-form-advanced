import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../user.class";
import {emailValidators, rangeValidator} from "../custom-validators";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm = new FormGroup({});
  roles: string[] = ['Гость', 'Модератор', 'Администратор'];
  user: User = new User(1, null, null, null, null, null);

  formErrors: any = {
  name: '',
  password: '',
  email: '',
  age: '',
  role: ''
}
validationMessages: any = {
  name: {
    required: 'Имя обязательно.',
    minlength: 'Имя должно содержать не менее 4-х символов.',
    maxlength: 'Имя должно содержать не более 15-ти символов.'
  },
  password: {
    required: 'Пароль обязателен.',
    minlength: 'Пароль должен содержать не менее 7-ми символов.'
  },
  email: {
    required: 'email обязателен.',
    emailValidators: 'Не правильный формат email адреса.'
  },
  age: {
    required: 'Возраст обязателен.',
    rangeValidator: 'Значение должно быть целым числом в диапазоне 18...122.'
  },
  role: {
    required: 'Обязателеное поле.'
  }
}



  constructor (private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.userForm = this.fb.group( {
      name: [this.user.name, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      password: [this.user.password, [Validators.required, Validators.minLength(7)]],
      email: [this.user.email, [Validators.required, emailValidators]],
      age: [this.user.age, [Validators.required, rangeValidator(18, 122)]],
      role: [this.user.role, [Validators.required]]
    });
    this.userForm.valueChanges.subscribe(() => this.onValueChanged())

  }

  private onValueChanged (): void {
    const form:any = this.userForm;
    for (const field in this.formErrors) {
    this.formErrors[field] = '';
    const control = form.get(field);

    if (control && control.dirty && control.invalid) {
      const messages = this.validationMessages[field];

      for (const key in control.errors) {
        console.log(messages[key])
        this.formErrors[field] = messages[key];
        break;

        }
      }
    }
  }


  onSubmit(): void {
    console.log(this.userForm.valid)
    console.log(this.userForm.value)

  }
}


// roles: string[] = ['Гость', 'Модератор', 'Администратор']
// model: User = new User(0, '', '', null);
//
// formErrors: any = {
//   name: '',
//   age: ''
// }
// validationMessages: any = {
//   name: {
//     required: 'Имя обязательно',
//     minlength: 'Имя должно содержать минимум 4 символа'
//   },
//   age: {
//     required: 'Возраст обязателен'
//   },
// }
// @ViewChild('userForm') userForm: NgForm | null = null;
// constructor() { }
//
// ngOnInit(): void {
// }
// ngAfterViewInit(): void {
//   this.userForm?.valueChanges?.subscribe(() => this.onValueChanged())
//
// }
// private onValueChanged (): void {
//   const form:any = this.userForm?.form;
// for (const field in this.formErrors) {
//   this.formErrors[field] = '';
//   const control = form.get(field);
//
//   if (control && control.dirty && control.invalid) {
//     const messages = this.validationMessages[field];
//
//     for (const key in control.errors) {
//       console.log(messages[key])
//       this.formErrors[field] += messages[key];
//
//     }
//   }
// }
// }
// onSubmit(): void {
//
// }
