import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Album } from './album';
import { Track } from './track';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AlbumService } from './album.service';
import { Location } from '@angular/common';
import { DomSanitizer, BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import 'rxjs/add/operator/switchMap';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
	selector:'album-details',
	templateUrl: './album-detail.component.html',
	styleUrls: ['./album-detail.component.css'],
	providers: [AlbumService]
})

export class AlbumDetailComponent implements OnInit {

	tracks: Track[] = [];

	constructor(private albumService: AlbumService,
		private route: ActivatedRoute, private location: Location, private sanitizer: DomSanitizer) {}

	ngOnInit(): void {
		this.route.paramMap
		.switchMap((params: ParamMap) => this.albumService.getTracks(params.get('album_id')))
		.subscribe(tracks =>{
			console.log(tracks, 'tracks');
			this.tracks = tracks
		})
	}

	updateSpotifyUrl(url: string) {
		// sanitize URL
		// return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}

}