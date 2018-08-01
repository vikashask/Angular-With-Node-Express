import { UserService } from './shared/service/user/user.service';
import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogIn = false;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.isLogIn = this._userService.isLoggedIn();
  }

  onRegister(e) {
    console.log(e, 'onregister');
  }

  logout() {
    console.log();

  }
}
