import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { SideBarComponent } from './side-bar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    ScrollingModule,
    RouterModule
  ],
  exports:[SideBarComponent]
})
export class SideBarModule { }
