import { Component, Input, OnInit } from '@angular/core';
import { Album } from './album';
import { Track } from './track';
import { Router, ActivatedRoute } from '@angular/router';
import { AlbumService } from './album.service';
import 'rxjs/add/operator/switchMap';


@Component({
	selector:'album-details',
	templateUrl: './album-detail.component.html',
	styleUrls: ['./album-detail.component.css'],
	providers: [AlbumService]
})

export class AlbumDetailComponent {//implements OnInit  {
	// @Input() track: Track;

	constructor(private router: Router) {}

	// ngOnInit(): void {
	// 	this.router.paramMap
	// 		.switchMap((params: ParamMap) => this.albumService.getDetail(params.get('id')))
	// 		.subscribe( album => this.album = album);
	// }
}