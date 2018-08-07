import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-album-grid',
  templateUrl: './album-grid.component.html',
  styleUrls: ['./album-grid.component.css']
})
export class AlbumGridComponent implements OnInit {

  @Input() albums: Album[];
  
  constructor() { }

  ngOnInit() {
  }

}
