import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutsetRoutingModule } from './outset-routing.module';
import { OutsetComponent } from './outset.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [OutsetComponent],
  imports: [
    CommonModule,
    OutsetRoutingModule,
    RouterModule,
    MatIconModule,

  ]
})
export class OutsetModule { }
