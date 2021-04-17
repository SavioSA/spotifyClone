import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'spotifyClone';
  showSystemMenu = false;

  @ViewChild('sideMenu') sideMenu!: MatDrawer;
  constructor(private authService: AuthService, private route: ActivatedRoute ,private router: Router) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.showSystemMenu = event.url != '/login';
        console.log(this.showSystemMenu);
      }

  })


  }

  ngOnInit() {

  }

  toggleSideNav() {
    this.sideMenu.toggle();
  }


}
