import { AfterContentInit, ChangeDetectorRef, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
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
  changes!: any;

  @ViewChild('sideMenu') sideMenu!: MatDrawer;
  constructor(private changeDetectorRef: ChangeDetectorRef, private authService: AuthService, private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(event => {

      if (event instanceof NavigationStart) {
        if (event.url === "/login") {
          this.showSystemMenu = false;
        }
        if (event.url !== "/login") {
          this.showSystemMenu = true;
        }
        if (event.url === "/login" && event.navigationTrigger ==="popstate") {
          this.showSystemMenu = false;
          this.router.navigate(['/login'])
        }
      }

      if (event instanceof NavigationEnd) {
        if (event.url !=="/login" && event.urlAfterRedirects === '/login') {
          this.showSystemMenu = false;
        }
        if (event.urlAfterRedirects === '/login') {
          setTimeout(() => {
          this.ngOnInit();

          }, 100);
        }
      }
  })


  }

  ngOnInit() {
    console.log(this.showSystemMenu);
  }

  toggleSideNav() {
    this.sideMenu.toggle();
  }


}
