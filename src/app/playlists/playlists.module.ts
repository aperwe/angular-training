import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists/playlists.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlaylistsComponent,
    ItemsListComponent,
    ListItemComponent,
    PlaylistDetailsComponent
  ],
  exports: [
    PlaylistsComponent
  ]
})
export class PlaylistsModule { }
