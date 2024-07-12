import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from './Song';

const URL: string = 'https://636555b7f711cb49d1fba72d.mockapi.io/api/songs'

@Injectable({
  providedIn: 'root'
})
export class MusicDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Song[]> {
    return this.http.get<Song[]>(URL)
  }
}
