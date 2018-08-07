import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output} from '@angular/core';
import { Playlist } from '../../models/playlist';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  selected: Playlist | null;

  @Input() items: Playlist[];

  @Output() selectedChange = new EventEmitter<Playlist>();

  select(playlist:Playlist){
    this.selected = playlist;

    this.selectedChange.emit(playlist);
  }

  trackFn(index, elem)
  {
    return elem.id;
  }
  constructor() {
/*     setInterval(() => {
      this.playlists.unshift(this.playlists.pop());
      this.playlists.unshift(this.playlists.pop());
      this.playlists.unshift(this.playlists.pop());
    }, 1500)
 */  }

  ngOnInit() {
  }

}
