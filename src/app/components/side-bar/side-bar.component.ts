import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  playlists = [
    'Playlist1',
    'Playlist2',
    'Playlist3',
    'Playlist4',
    'Playlist5',
    'Playlist6',
    'Playlist7',
    'Playlist8',
    'Playlist9',

  ]
  constructor() { }

  ngOnInit() {

    console.log(window.location.href)

  }

}
