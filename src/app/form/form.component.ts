import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl(),
    password:new FormControl()
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

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
