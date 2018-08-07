import { Component, OnInit, Input, Inject } from '@angular/core';
import { Album } from 'src/app/models/album';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.css']
})
export class MusicSearchComponent implements OnInit {

  albums: Album[];

  constructor(
    //@Inject("MusicService")
    private musicService:MusicService
  ) { 
    this.albums = this.musicService.getAlbums()
  }

  ngOnInit() {
  }

}
