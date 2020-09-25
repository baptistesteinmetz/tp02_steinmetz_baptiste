import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {
  visible: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
