import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  visible: boolean;
  lastname: string;
  firstname: string;
  adress: string;
  zipcode: string;
  city: string;
  gender: string;
  mail: string;
  password: string;
  login: string;
  country: string;


  constructor() {
  }
  
  ngOnInit(): void {
    this.firstname = "Baptiste";
  }

}
