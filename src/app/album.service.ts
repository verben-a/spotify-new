import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Track } from './track'
import { Album } from './album';

@Injectable()
export class AlbumService {

	private headers = new Headers({'Content-Type': 'application/json'})
	private spotifyUrl = 'https://spotify-alina.herokuapp.com/api/search';

	constructor(private http: Http) {}

	getAlbum(artistName: string): Promise<Album[]> {
		const url = `${this.spotifyUrl}?name=${artistName}`;
		return this.http.get(url)
		.toPromise()
		.then(response => response.json().items as Album[])
		.catch(this.handleError);
	}

	getTracks(id:string):Promise<Track> {
		console.log(`${id} found`);
		const url = `${this.spotifyUrl}/album_tracks?album_id=${id}`;
		return this.http.get(url)
		.toPromise()
		.then(response => response.json().items as Track[])
		.catch(this.handleError);
	}


	private handleError(error:any): Promise<any> {
		console.error('An error occured', error);
		return Promise.reject(error.message || error);
	}

}