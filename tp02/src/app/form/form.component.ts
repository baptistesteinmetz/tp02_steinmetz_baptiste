import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../User';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit {
  public user: User = new User();
  visible: boolean;
  // lastname: string;
  // firstname: string;
  // adress: string;
  // zipcode: string;
  // city: string;
  // gender: string;
  // mail: string;
  // password: string;
  // login: string;
  // country: string;

  @Input() userName: string = this.user.firstname;
  constructor() {
    this.user = new User();
  }

  ngOnInit(): void {
    // this.firstname = "Baptiste";
    // this.user.firstname = "Baptiste";
  }

}
