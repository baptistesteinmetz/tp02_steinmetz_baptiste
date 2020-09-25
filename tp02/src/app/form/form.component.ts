import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../User';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit {
  public user: User;
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


  constructor() {
    this.user = new User();
  }

  ngOnInit(): void {
    // this.firstname = "Baptiste";
    this.user.firstname = "Baptiste";
  }

}
