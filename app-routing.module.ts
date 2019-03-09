import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstcomComponent} from './firstcom/firstcom.component';
import {SecondComponent} from './second/second.component';


const routes: Routes =[
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path:'first', component: FirstcomComponent },
  {path:'second', component: SecondComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
