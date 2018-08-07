import { Component, OnInit, Input } from '@angular/core';
import { Album, AlbumImage } from 'src/app/models/album';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {

  album: Album;
  image: AlbumImage;

  @Input("album")
  set albumsetter(album) {
    this.album = album;
    this.image = album.images[0] || { url: "default.png" };
  }
  constructor() { }

  ngOnInit() {
  }

}
