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
    private security: SecurityService
  ) { }

  getAlbums() {
    return this.http.get<AlbumsResponse>(this.api_url, {
      headers: {
        Authorization: "Bearer " + this.security.getToken()
      },
      params: {
        type: "album",
        q: ""
      }
    }).pipe(
      map(response => response.albums.items),
      catchError((error: Error) => {
        if (error instanceof HttpErrorResponse) {
          console.log(error.error.error.message);
        }
        return throwError(Error('Unknown Server error'));
      })
    );
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