import { Component } from '@angular/core';
import { FavSongsService } from '../fav-songs.service';
import { Song } from '../Song';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrl: './fav-list.component.scss'
})
export class FavListComponent {
  songs : Song[] = []

  constructor(private FavSongsService: FavSongsService){
  }

  ngOnInit(): void {
    this.FavSongsService.favListOvservable.subscribe(listData => this.songs = listData)
  }
}
