import { Injectable } from '@angular/core';
import { Song } from './Song';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FavSongsService {
  private _favList: Song[] = [];
  private _favListSubject: BehaviorSubject<Song[]> = new BehaviorSubject(this._favList)
  favListOvservable: Observable<Song[]> = this._favListSubject.asObservable()
  
  addToFavs(song: Song): void {
    const index = this._favList.findIndex(s => s.IDSong === song.IDSong);
    if(index === -1)
      this._favList.push(song)
    console.log(this._favList)
    this._favListSubject.next(this._favList)
  }
  
  deleteFav(idToRemove: number): void {
    const index = this._favList.findIndex(song => song.IDSong === idToRemove);
    if (index !== -1) {
      this._favList.splice(index, 1);
    }
    console.log(this._favList)
    this._favListSubject.next(this._favList)
  }

  constructor() { }
}
