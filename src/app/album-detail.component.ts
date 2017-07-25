import { Component, Input, OnInit } from '@angular/core';
import { Album } from './album';
import { Track } from './track';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { AlbumService } from './album.service';
import 'rxjs/add/operator/switchMap';


@Component({
	selector: 'album-details',
	templateUrl: './album-detail.component.html',
	styleUrls: ['./album-detail.component.css'],
	providers: [AlbumService]
})

export class AlbumDetailComponent implements OnInit  {
	
	tracks: Track[] = [];// we are fetching tracks belonging to an album

	constructor(private albumService: AlbumService,
		private route: ActivatedRoute, private location: Location) {}

	ngOnInit(): void {
		this.route.paramMap
			.switchMap((params: ParamMap) => this.albumService.getTracks(params.get('id')))
			.subscribe(tracks => {
				console.log(tracks, 'tracks');
				// this.tracks = tracks
			});
	}
}