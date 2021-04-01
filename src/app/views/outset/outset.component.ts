import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outset',
  templateUrl: './outset.component.html',
  styleUrls: ['./outset.component.css']
})
export class OutsetComponent implements OnInit {

  emphasis = [
    {
      name: "99 Clipes dos anos 80/90",
      urlImg: "https://i.scdn.co/image/ab67706c0000da84096ab52048b1e7a7943592f7"
    },
    {
      name: "BR",
      urlImg: "https://mosaic.scdn.co/640/ab67616d00001e022b4da5abb231f0dfc297ff09ab67616d00001e0262a0156ebaa038067bbaecccab67616d00001e027e6bac67c798fb0dd60e7fbcab67616d00001e02d085bdb7982ee883d6f66852"
    },
    {
      name: "Sabaton",
      urlImg: "https://mosaic.scdn.co/640/ab67616d00001e020c100c40bdedea776770e7aaab67616d00001e026c7afe9024bc69f7ea1956b2ab67616d00001e02735eecca68d3bb03e2e35a75ab67616d00001e02b37a2bb117c7ae30ee77b6bd"
    },
    {
      name: "Raul Seixas",
      urlImg: "https://i.scdn.co/image/a935badd3a6287b64c1b48cf66375ee192b9a12f"
    },
    {
      name: "Legião Urbana",
      urlImg: "https://i.scdn.co/image/cd410bc7c6e3591f65d9c9ee9516d2e96acfed42"
    },
    {
      name: "Kiss",
      urlImg: "https://i.scdn.co/image/74925968b2f76706c62bed18af92ef43241e7756"
    },
    {
      name: "Imagine Dragons",
      urlImg: "https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a"
    },
    {
      name: "Brasil 80's",
      urlImg: "https://i.scdn.co/image/ab67706f00000002a851c314d12f7efbb30aab8d"
    }
  ];
  playlists = [
    {
      title: "Tocado Recentemente",
      items: [
        {
          urlIgm: "https://i.scdn.co/image/ab67706f00000002eddb99fe9ee6ca8a862b07d0",
          playlistTitle: "Brasil anos 2000",
          playlistDescription: "Do Shimbalaiê ao bundalelê, os hits que marcaram a década."
        },
                {
          urlIgm: "https://i.scdn.co/image/ab67706f000000021b58c73660114f8b59af6638",
          playlistTitle: "Rock Retrô",
          playlistDescription: "Uma viagem no tempo através de grandes clássicos do Rock!"
        },
        {
          urlIgm: "https://i.scdn.co/image/ab67706f000000028672e2b37d4a0376222a53f6",
          playlistTitle: "80s Rock Anthems",
          playlistDescription: "These songs rocked the 80s. Cover: AC/DC."
        },
        {
          urlIgm: "https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat_DEFAULT-pt.jpg",
          playlistTitle: "No Repeat",
          playlistDescription: "As músicas que você está curtindo agora."
        },
        {
          urlIgm: "https://i.scdn.co/image/ab67706f000000024bb1054c6453a3f8a4b64b39",
          playlistTitle: "Coleção MPB",
          playlistDescription: "Canções que ajudaram a escrever a História da Música Popular Brasileira. Foto: Elis Regina."
        },
        {
          urlIgm: "https://i.scdn.co/image/ab67706f0000000223dc91cbdd250e709add304e",
          playlistTitle: "80s Love Songs",
          playlistDescription: "The most unforgettable love songs from the 80s."
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
