import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';
import {debounceTime} from 'rxjs/operator/debounceTime';
import {distinctUntilChanged} from 'rxjs/operator/distinctUntilChanged';
import { AlbumService } from './album.service';
import { Album } from './album';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AlbumService]
})

export class DashboardComponent {
  title = 'app';
  public artistName: any;
  public showVisibility: any = 'hidden';

  albums: Album[] = []; 

  constructor(
    private albumService: AlbumService){}


  onSubmit() {
    this.albumService.getAlbum(this.artistName)
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