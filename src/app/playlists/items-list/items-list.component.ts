import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Playlist } from '../../models/playlist';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  selected: Playlist | null;

  playlists: Playlist[] = [
    {
      id: 123, name: "Powerful", color: "#ff0000", favourite: true
    },
    {
      id: 124, name: "Adagio", color: "#ff0000", favourite: false
    },
    {
      id: 125, name: "TOP 20", color: "#ff0000", favourite: true
    },
    {
      id: 126, name: "Best of angular", color: "#ff0000", favourite: true
    }
  ]

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
