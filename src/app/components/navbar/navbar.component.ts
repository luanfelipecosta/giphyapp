import { RouterModule,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GiphyService } from './../../services/giphy.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	query: string = "";
	gifs:  any[];

	constructor(private _GiphyService: GiphyService, private _Router:Router) { }

	ngOnInit() {
	}
	
	searchButtonState() {
		if(this.query == "") return true; else return false; 
	}

	// GET 
	queryGifs() {
		window.location.reload();
		this._Router.navigate(['/search', this.query]);
	}


}
