import { Component, OnInit } from '@angular/core';
import { Playlist } from "../../models/playlist"

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.css']
})
export class PlaylistDetailsComponent implements OnInit {

  playlist: Playlist = {
    id: 123,
    name: "Angular 2 Not hits!",
    color: "#ff0000",
    favourite: true
  }

  constructor() { }

  mode: "show" | "edit" = "show";

  edit() {
    this.mode = 'edit';
  }

  cancel() {
    this.mode = 'show';
  }

  save() {
    console.log("Save");
  }

  ngOnInit() {}

}

