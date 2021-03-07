import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomBarComponent } from './bottom-bar.component';
import { AngularResizedEventModule } from 'angular-resize-event';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [BottomBarComponent],
  imports: [
    CommonModule,
    AngularResizedEventModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports: [
    BottomBarComponent
  ]
})
export class BottomBarModule { }
