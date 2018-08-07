import { Injectable, Inject } from '@angular/core';
import { Album } from 'src/app/models/album';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  constructor(
    @Inject("MUSIC_API_URL")
    private api_url: string,
    private http: HttpClient
  ) { }

  getAlbums() {
    this.http.get(this.api_url, {
      headers: {
        Authorization: "placki!"
      },
      params: {
        type: "albums",
        q: "batman"
      }
    })
    .subscribe(response => {
      console.log(response)
    })

    console.log('tutaj');
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
          url: "https://placekitten.com/24/24"
        }
      ]
    },
    {
      id: "125",
      name: "Test Album again",
      images: [
        {
          width: 300, height: 300,
          url: "https://placekitten.com/32/32"
        }
      ]
    },
    {
      id: "126",
      name: "Test Album 126",
      images: [
        {
          width: 300, height: 300,
          url: "https://placekitten.com/64/64"
        }
      ]
    },
    {
      id: "127",
      name: "Album from service",
      images: [
        {
          width: 300, height: 300,
          url: "https://placekitten.com/128/128"
        }
      ]
    },
  ];

}
