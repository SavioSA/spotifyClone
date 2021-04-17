import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  host = 'https://accounts.spotify.com/authorize?';
  clientSecret = '936858a05b3f463fa9062088ebcff123';
  responseType = 'response_type=token';
  redirectUri = 'redirect_uri=http://localhost:4200/login';
  clientId = `client_id=${environment.CLIENT_ID}`;
  scope = 'scope=user-read-private user-read-email user-library-read playlist-read-private playlist-modify-private user-read-recently-played app-remote-control';
  state!: string;
  url!: string;
  tokenAcess!: string;
  showSystemMenu! :boolean;

  constructor(private route: ActivatedRoute, private location: Location, private router: Router) { }
  login() {
    if (sessionStorage.getItem('token')) {
      window.location.href = 'http://localhost:4200/outset'
    } else {
        this.state = `${this.generateRandomString(16)}`;
        sessionStorage.setItem('state', this.state);
        this.url = `${this.host}${this.clientId}&${this.responseType}&${this.redirectUri}&${this.scope}&state=${this.state}`
        window.location.href = this.url;
    }
}

  generateRandomString (length:number) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  setToken() {
    if (!sessionStorage.getItem('token') && this.route.snapshot.fragment ) {
      const queryReturned = this.route.snapshot.fragment.split('&');
      const queryReturnedObject:any = {};
      for (const item of queryReturned) {
        const itemSplit = item.split('=');
        queryReturnedObject[itemSplit[0]] = itemSplit[1];
      }
        this.tokenAcess = sessionStorage.getItem('state') === queryReturnedObject.state ? queryReturnedObject.access_token : false;
        sessionStorage.setItem('token', this.tokenAcess);
        this.router.navigate(['/outset']);
    }
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  setSystemMenu() {
    this.showSystemMenu = true;
  }

  getSystemMenuInfo() {
    return this.showSystemMenu
  }
}
