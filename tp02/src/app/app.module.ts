import { ErrorInputDirective } from './customdirectives.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { RecapComponent, PhonePipe, CodePipe } from './recap/recap.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
// import { ErrorInputDirective } from './customdirectives.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    RecapComponent,
    ErrorInputDirective,
    PhonePipe,
    CodePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
