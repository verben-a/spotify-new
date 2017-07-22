import { Component, Directive } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';
import {debounceTime} from 'rxjs/operator/debounceTime';
import {distinctUntilChanged} from 'rxjs/operator/distinctUntilChanged';
import { SpotifyService } from './spotify.service';
import { Album } from './album';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpotifyService]
})
// @Directive({selector: '[ngStyle]'})
export class AppComponent {
  title = 'app';
  public artistName: any;
  public showVisibility: any = 'hidden';

  albums: Album[] = []; // deafult!!! no albums

  constructor(
    private spotifyService: SpotifyService){}



  // we have to "declare the nature of a variable (local)"
  // search = (text$: Observable<string>) => {
    // return map.call(distinctUntilChanged.call(debounceTime.call(text$, 200)),
      // term => {
      	// make an API http GET call after the "artists" get load, 
      	// return term.length < 2 ? [] : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
      // });
  onSubmit() {
    this.spotifyService.getAlbum(this.artistName)
    .then(albums => this.albums = albums);
  }

  cover() {
    if (this.showVisibility == 'hidden') {
      this.showVisibility = 'visible';
    }
    else {
      this.showVisibility = 'hidden';
    }
    
  }
}