import { Injectable, Inject } from '@angular/core';
import { Album } from 'src/app/models/album';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  constructor(
    @Inject("MUSIC_API_URL")
    private api_url: string
  ) { }

  getAlbums() {
    return this.albums;
  }
  
  albums: Album[] = [
    {
      id: "123",
      name: "Album from service",
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
      name: "Test Album 126",
      images: [
        {
          width: 300, height: 300,
          url: "https://placekitten.com/22/22"
        }
      ]
    },
    {
      id: "127",
      name: "Album from service",
      images: [
        {
          width: 300, height: 300,
          url: "https://placekitten.com/24/24"
        }
      ]
    },
  ];

}
