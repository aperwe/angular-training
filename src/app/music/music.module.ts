import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicSearchComponent } from './music-search/music-search.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { AlbumGridComponent } from './album-grid/album-grid.component';
import { AlbumItemComponent } from './album-item/album-item.component';

@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule
  ],
  declarations: [
    MusicSearchComponent,
    SearchFormComponent,
    AlbumGridComponent,
    AlbumItemComponent],
  exports: [MusicSearchComponent]
})
export class MusicModule { }
