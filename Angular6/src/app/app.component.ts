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

  constructor(private _userService: UserService) { }

  ngOnInit() {

  }

  onRegister(e) {
    console.log(e, 'onregister');
  }

}
