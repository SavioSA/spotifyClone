import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { OutsetService } from 'src/services/outset.service';


@Component({
  selector: 'app-outset',
  templateUrl: './outset.component.html',
  styleUrls: ['./outset.component.css']
})
export class OutsetComponent implements OnInit {

  emphasis: any[] = [];
  userInfo: any = {};
  playlists: any = [];

  constructor( private outsetService: OutsetService ) { }

  ngOnInit(): void {
    this.loadInfos();
  }

  loadInfos() {
    this.getUserInfo();
    this.getRecent();
    this.getNewRealeases();
    this.getFeaturedPlaylists();
  }

  getRecent() {
    this.outsetService.getRecent().subscribe((data: any) => {
      for (const playlist of data.items) {
        const [firstImage] = playlist.images;
        playlist.urlImage = firstImage.url;
      }
      this.emphasis = data.items;
    });
  }

  getUserInfo() {
    this.outsetService.getUserInfo().subscribe((data:any) => {
      const urlImage = data.images[0].url;
      data.urlImage = urlImage;
      this.userInfo = data;
    })
  }

  getNewRealeases() {
    this.outsetService.getNewReleases().subscribe((data: any) => {
      for (const playlist of data.albums.items) {
        const [firstImage] = playlist.images;
        playlist.urlImage = firstImage.url;
      }
      this.playlists.push({
        title: "New Releases ",
        items: data.albums.items
      });
    });
  }

  getFeaturedPlaylists() {
    this.outsetService.getFeaturedPlaylists().subscribe((data: any) => {
      for (const playlist of data.playlists.items) {
        const [firstImage] = playlist.images;
        playlist.urlImage = firstImage.url;
      }
      this.playlists.push({
        title: data.message,
        items: data.playlists.items
      });
    });
  }
}
