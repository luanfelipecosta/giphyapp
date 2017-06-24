import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class GiphyService {

	limit: number = 50;
	constructor(private _http:Http) { }

	getTrending(): Observable<any> {
		
		const url = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=' + this.limit;

		return this._http.get(url).map(
			res => {
				const data = res.json();
				return data;
			}
		);
	}
	// GET - returns a result streaming from what is being queried. 
	queryGifs(q): Observable<any> {

		console.log('service.queryGifs -> ' + q );

		(q) ? q = q.trim().replace(' ', '+') : q = '';	

		const url = 'http://api.giphy.com/v1/gifs/search?q='+ q + '&api_key=dc6zaTOxFJmzC&limit=' + this.limit;
		
		return this._http.get(url).map(
			res => {
				const data = res.json();
				return data;
			}
		);
	}


}
