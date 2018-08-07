import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from "../../models/playlist"

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.css']
})
export class PlaylistDetailsComponent implements OnInit {

  @Input() playlist: Playlist

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

