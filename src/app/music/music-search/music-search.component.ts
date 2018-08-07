import { Component, OnInit, Input, Inject } from '@angular/core';
import { Album } from 'src/app/models/album';
import { MusicService } from '../music.service';
import { error } from 'util';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.css']
})
export class MusicSearchComponent implements OnInit {

  albums: Album[];

  message: string;

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.musicService
      .getAlbums()
      .subscribe(
        albums => (this.albums = albums),
        (error: Error) => {
          this.message = error.message;
        }
      );
  }


}
