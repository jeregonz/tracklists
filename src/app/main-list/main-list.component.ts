import { Component } from '@angular/core';
import { Song } from '../Song';

@Component({
  selector: 'main-list',
  templateUrl: './main-list.component.html',
  styleUrl: './main-list.component.scss'
})

export class MainListComponent {
  songs: Song[] = [
    {
      songName : "Give Life Back to Music",
      artist : "Daft Punk",
      album : "RAM",
      songLength : "04:35",
      isLiked: false,
    },
    {
      songName : "The Game of Love",
      artist : "Daft Punk",
      album : "RAM",
      songLength : "05:22",
      isLiked: false,
    },
    {
      songName : "Giorgio by Moroder",
      artist : "Daft Punk",
      album : "RAM",
      songLength : "09:04",
      isLiked: false,
    },
    {
      songName : "Within",
      artist : "Daft Punk",
      album : "RAM",
      songLength : "03:48",
      isLiked: true,
    },
  ]

  setLike(song: Song): void{
    song.isLiked = !song.isLiked
  }
}
