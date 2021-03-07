import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { SideBarComponent } from './side-bar.component';


@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    ScrollingModule
  ],
  exports:[SideBarComponent]
})
export class SideBarModule { }
