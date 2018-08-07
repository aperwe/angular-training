import { Injectable, Inject } from '@angular/core';
import { Album } from 'src/app/models/album';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SecurityService } from 'src/app/security/security.service';
import { map, catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  constructor(
    @Inject("MUSIC_API_URL")
    private api_url: string,
    private http: HttpClient,
  ) { }

  getAlbums() {
    return this.http
      .get<AlbumsResponse>(this.api_url, {
        params: {
          type: "album",
          q: "batman"
        }
      }).pipe(
        map(response => response.albums.items));
  }

  /// Unused
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

interface AlbumsResponse {
  albums: {
    items: Album[];
  }
}