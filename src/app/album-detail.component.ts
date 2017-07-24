import { Component, Input } from '@angular/core';
import { Album } from './album';
import { Track } from './track';
import { Router, ActivatedRoute } from '@angular/router';
import { AlbumService } from './album.service';


@Component({
	selector:'album-details',
	templateUrl: './album-detail.component.html',
	styleUrls: ['./album-detail.component.css'],
	providers: [AlbumService]
})

export class AlbumDetailComponent  {
	// @Input() track: Track;

	constructor(private router: Router) {}
}