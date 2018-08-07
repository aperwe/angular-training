import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.css']
})
export class MusicSearchComponent implements OnInit {

  @Input()
  albums: Album[] = [
    {
      id: "123",
      name: "Test Album again",
      images: [
        {
          width: 300, height: 300,
          url: "https://placekitten.com/16/16"
        }
      ]
    },
    {
      id: "124",
      name: "Test Album 2",
      images: [
        {
          width: 300, height: 300,
          url: "https://placekitten.com/18/18"
        }
      ]
    },
    {
      id: "125",
      name: "Test Album again",
      images: [
        {
          width: 300, height: 300,
          url: "https://placekitten.com/20/20"
        }
      ]
    },
    {
      id: "126",
      name: "Test Album again",
      images: [
        {
          width: 300, height: 300,
          url: "https://placekitten.com/22/22"
        }
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
