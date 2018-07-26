import { RestService } from './../../rest.service';
import { UserService } from './../../service/user/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  username: FormControl;
  password: FormControl;


  userdata: any;
  errorMessage = '';

  constructor(private _userService: UserService, private restWrapperService: RestService) { }


  ngOnInit() {
    this.createForm();

  }

  createForm() {
    this.loginform = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  onSubmit() {
    const loginFormData = {
      username: this.loginform.controls.username.value,
      password: this.loginform.controls.password.value
    };
    this._userService.userLogin(loginFormData).subscribe(
      (rsp: any) => {
        if (rsp) {
          console.log(rsp, 'response after final step');
          this.userdata = rsp;
        }
      },
      error => this.errorMessage = 'An error was encountered loading your order history.'
    );
  }
}
