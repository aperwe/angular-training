import { Component, OnInit } from '@angular/core';
import { Playlist } from '../../models/playlist';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  playlists: Playlist[] = [
    {
      id: 123, name: "Powerful", color: "#0ff000", favourite: true
    },
    {
      id: 124, name: "Adagio", color: "#0000ff", favourite: false
    },
    {
      id: 125, name: "TOP 20", color: "#00aa00", favourite: true
    },
    {
      id: 126, name: "Best of angular", color: "#ff0000", favourite: true
    }
  ];

  savePlaylist(playlist) {
    const index = this.playlists.findIndex(old => old.id == playlist.id);
    this.playlists.splice(index, 1, playlist);
  }

  selected: Playlist

  constructor() { }

  ngOnInit() {
  }

}
