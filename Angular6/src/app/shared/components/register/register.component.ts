import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RestService } from './../../rest.service';
import { UserService } from './../../service/user/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  age: FormControl;
  registerInfo: any;

  @Output() isRegister = new EventEmitter<boolean>();

  constructor(private _userService: UserService, private restWrapperService: RestService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.registerForm = new FormGroup({
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age
    });
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.firstName = new FormControl('', [
      Validators.required,
    ]);
    this.lastName = new FormControl('', [
      Validators.required,
    ]);
    this.age = new FormControl('', [
      Validators.required,
    ]);
  }

  onRegister() {
    const registerFormData = {
      email: this.registerForm.controls.email.value,
      password: this.registerForm.controls.password.value,
      firstName: this.registerForm.controls.firstName.value,
      lastName: this.registerForm.controls.lastName.value,
      age: this.registerForm.controls.age.value,
    };
    console.log(registerFormData, 'register');
    this._userService.userRegister(registerFormData).subscribe(
      (rsp: any) => {
        if (rsp) {
          this.registerInfo = rsp.msg;
          this.isRegister.emit(true);
        }
      },
      error => this.registerInfo = 'An error was encountered loading.'
    );

  }
}
