import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainListComponent } from './main-list/main-list.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FavSongsComponent } from './fav-songs/fav-songs.component';

@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    AboutComponent,
    HomeComponent,
    FavSongsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
