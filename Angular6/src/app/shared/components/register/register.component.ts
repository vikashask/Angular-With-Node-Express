import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RestService } from './../../rest.service';
import { UserService } from './../../service/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginform: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(private _userService: UserService, private restWrapperService: RestService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.loginform = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  createFormControls() {
    this.username = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  onRegister() {
    console.log('register');
  }
}
