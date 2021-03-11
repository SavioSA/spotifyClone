import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutsetComponent } from './outset.component';

const routes: Routes = [
  {
    path: '',
    component: OutsetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutsetRoutingModule { }
