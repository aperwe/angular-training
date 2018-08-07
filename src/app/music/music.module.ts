import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicSearchComponent } from './music-search/music-search.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { AlbumGridComponent } from './album-grid/album-grid.component';
import { AlbumItemComponent } from './album-item/album-item.component';
import { environment } from '../../environments/environment';
import { MusicService } from './music.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule,
    HttpClientModule
  ],
  declarations: [
    MusicSearchComponent,
    SearchFormComponent,
    AlbumGridComponent,
    AlbumItemComponent],
  exports: [MusicSearchComponent],
  providers: [
    {
      provide: "MUSIC_API_URL",
      useValue: environment.music_search.api_url
    },
    // {
    //   provide: MusicService,
    //   useClass: MusicService

    //   }
    // }
    MusicService
  ]
})

export class MusicModule { }
