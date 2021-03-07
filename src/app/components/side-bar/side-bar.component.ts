import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  items = Array.from({ length: 10 }).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit() {

    console.log(window.location.href)

  }

}
