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
    const x = window.matchMedia("(max-width: 700px)").matches;
    console.log(x)
    window.onresize = this.reportWindowSize
  }

  onResized(event: any) {
    console.log(event)
  }

  reportWindowSize() {
    console.log('mopa')
  }


}
