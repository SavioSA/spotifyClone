import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  playlists = [];
  constructor( private authService: AuthService, private http: HttpClient) { }

  ngOnInit() {

    setTimeout(() => {
      this.http.get<any>('https://api.spotify.com/v1/me/playlists', {
      }).subscribe((data: any) => {
      this.playlists = data.items;
    })
    }, 300);


  }

}
