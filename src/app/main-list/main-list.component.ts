import { Component } from '@angular/core';
import { Song } from '../Song';
import { FavSongsService } from '../fav-songs.service';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'main-list',
  templateUrl: './main-list.component.html',
  styleUrl: './main-list.component.scss'
})

export class MainListComponent {
  songs: Song[] = []

  constructor(private favSongs: FavSongsService, private musicData: MusicDataService){
  }

  ngOnInit(): void{
    this.musicData.getAll().subscribe(data => this.songs = data)
  }

  setLike(song: Song): void{
    song.isLiked = !song.isLiked
  }
  
  addToFavs(song: Song): void{
    this.setLike(song)
    this.favSongs.addToFavs(song)
  }

  deleteFav(song: Song): void{
    this.setLike(song)
    this.favSongs.deleteFav(song.IDSong)
  }
}
