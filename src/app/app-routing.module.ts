import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SalaDentalComponent } from './sala-dental/sala-dental.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'BBDental',
    component: SalaDentalComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
