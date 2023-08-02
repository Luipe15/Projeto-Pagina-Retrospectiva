import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SalaDentalComponent } from './sala-dental/sala-dental.component';
import { RoomsComponent } from './Rooms/rooms.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'rooms',
    component: RoomsComponent
  },
  {
    path: 'sala-bbdental',
    component: SalaDentalComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
