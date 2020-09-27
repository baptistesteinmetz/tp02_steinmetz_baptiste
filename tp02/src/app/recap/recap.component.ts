import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { User } from '../User';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent  {
  user: User = new User();
  // visible: boolean = false;
  // varname: string = "Test";
  // appareilStatus: string = "Test2"
  @Input () userName:string;
  constructor(parent: FormComponent) {
    // @Input() identifier: number;
  }

  ngOnInit(): void {
  }
  // @Input () userName: string;
  getStatus() {
    // return this.appareilStatus;
  }
}
