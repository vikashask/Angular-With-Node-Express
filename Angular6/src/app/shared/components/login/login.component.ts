import { RestService } from './../../rest.service';
import { UserService } from './../../service/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  email: FormControl;
  password: FormControl;
  loginInfo: any;

  constructor(private _userService: UserService, private restWrapperService: RestService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.loginform = new FormGroup({
      email: this.email,
      password: this.password
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
  }

  onSubmit() {
    const loginFormData = {
      email: this.loginform.controls.email.value,
      password: this.loginform.controls.password.value
    };
    this._userService.userLogin(loginFormData).subscribe(
      (rsp: any) => {
        if (rsp) {
          console.log(rsp, 'response after final step');
          this.loginInfo = rsp.msg;
        }
      },
      error => this.loginInfo = 'An error was encountered loading your order history.'
    );
  }
}
