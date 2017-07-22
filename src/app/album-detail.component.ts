import { Component, Input } from '@angular/core';
import { Album } from './album';
import { Track } from './track'
import { SpotifyService } from './spotify.service';


@Component({
	selector:'album-details',
	templateUrl: './album-detail.component.html',
	styleUrls: ['./album-detail.component.css'],
	providers: [SpotifyService]
})

export class AlbumDetailComponent  {
	@Input() track: Track;
}