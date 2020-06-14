import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SecugenSingleComponent} from './modules/secugen-single/secugen-single.component';


const routes: Routes = [
  {path: '', redirectTo: 'single-print', pathMatch: 'full'},
  {
    path: 'single-print',
    component: SecugenSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
