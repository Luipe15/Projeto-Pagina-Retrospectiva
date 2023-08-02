import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalaDentalComponent } from './sala-dental/sala-dental.component';
import { RoomsComponent } from './Rooms/rooms.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SalaDentalComponent,
    RoomsComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
