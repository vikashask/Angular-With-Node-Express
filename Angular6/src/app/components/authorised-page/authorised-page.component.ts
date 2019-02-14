import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authorised-page',
  templateUrl: './authorised-page.component.html',
  styleUrls: ['./authorised-page.component.css']
})
export class AuthorisedPageComponent implements OnInit {

@Input() statusCodeHttp: string;
@Input() messageHttp: string;

  constructor() { }

  ngOnInit() {
    console.log(this.messageHttp);
    console.log(this.statusCodeHttp);
  }

}
