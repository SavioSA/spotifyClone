import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit{
  title = 'spotifyClone';
  @ViewChild('sideMenu') sideMenu!: MatDrawer;
  constructor(
  ) {
  }

  ngAfterContentInit() {

  }

  toggleSideNav() {
    this.sideMenu.toggle();
  }


}
