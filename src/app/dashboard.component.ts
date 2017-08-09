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
  public loading: any;
  public showVisibility: any = true; // before submitting

  albums: Album[] = []; 

  constructor(
    private albumService: AlbumService){}


  onSubmit() {
    this.loading = true;
    this.albums = [];
    this.albumService.getAlbum(this.artistName)
    .then(albums => { 
      this.albums = albums;
      this.loading = false;
      this.showVisibility = false;
    });
  }

}