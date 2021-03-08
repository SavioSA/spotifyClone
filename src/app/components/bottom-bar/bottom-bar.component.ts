import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit{
  width!: number;
  height!: number;

  constructor() { }

  ngOnInit(): void {
  }
}
