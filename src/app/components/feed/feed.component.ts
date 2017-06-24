import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import * as _ from 'underscore';

import { GiphyService } from './../../services/giphy.service';
import { PagerService } from './../../services/pager.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
	
	query:string;
	gifs:any[];
	pager: any = {};
	pagedItems: any[];
    p: number = 1;
	debug:any;
	route: string;
	title: string;

	constructor(private pagerService: PagerService, 
				private giphyService: GiphyService, 
				private router: Router,
				private activatedroute: ActivatedRoute,
				private location: Location,
				) { 
					router.events.subscribe((val) => this.route = location.path());
				}

	ngOnInit() {
		
		
		this.query = this.activatedroute.snapshot.params.q;	
		this.route = this.route.replace('/', '');
		
		if(this.route === 'trending') {
			this.giphyService.getTrending()
			.subscribe((res) => {
				this.gifs = res.data;
				console.log(res.data);
				this.title = 'Trending';
			})
		} else {
			this.giphyService.queryGifs(this.query)
			.subscribe((res) => {
				this.gifs = res.data;
				console.log(res.data);
				this.title = 'Resultados para ' + this.query;
			});
		}
		
		
	
	}

	// get debug() { 
	// 	let r = JSON.stringify(this.route.url);
	// 	console.log(r);
	// 	return r; 
		
	// }


  	isCopied(buttonId){
		console.log('- is copied ' + buttonId)
		document.getElementById('button-' + buttonId).classList.toggle('is-success');
		let id = buttonId;
		setTimeout((id) => {
			document.getElementById('button-' + buttonId).classList.toggle('is-success');
		},300);
	}


	setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
	
        // get pager object from service
        this.pager = this.pagerService.getPager(this.gifs.length, page);

        // get current page of items
        this.pagedItems = this.gifs.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}
