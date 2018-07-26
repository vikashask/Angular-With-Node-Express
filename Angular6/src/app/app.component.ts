import { NgModule, Component, Pipe, OnInit, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UserService } from 'src/app/shared/service/user/user.service';
import { RestService } from 'src/app/shared/rest.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginform: FormGroup;
  username: FormControl;
  password: FormControl;

  userdata: any;
  errorMessage = '';
  isLogin = true;
  constructor(private _userService: UserService, private restWrapperService: RestService) { }

  ngOnInit() {
    // this._userService.getUser().subscribe(
    //   (rsp: any) => {
    //     if (rsp) {
    //       console.log(rsp);
    //       this.userdata = rsp;
    //     }
    //   },
    //   error => this.errorMessage = 'An error was encountered loading your order history.'
    // );
    // this.createFormControls();
    // this.createForm();
  }
  // createFormControls() {
  //   this.username = new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('[^ @]*@[^ @]*')
  //   ]);
  //   this.password = new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(8)
  //   ]);
  // }

  // createForm() {
  //   this.loginform = new FormGroup({
  //     username: this.username,
  //     password: this.password
  //   });
  // }

  // onSubmit() {
  //   const loginFormData = {
  //     username: this.loginform.controls.username.value,
  //     password: this.loginform.controls.password.value
  //   };
  //   this._userService.userLogin(loginFormData).subscribe(
  //     (rsp: any) => {
  //       if (rsp) {
  //         console.log(rsp, 'response after final step');
  //         this.userdata = rsp;
  //       }
  //     },
  //     error => this.errorMessage = 'An error was encountered loading your order history.'
  //   );
  // }

  // register() {
  //   this.isLogin = false;
  //   console.log('register');

  // }
}
