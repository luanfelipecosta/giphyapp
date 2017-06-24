import { GiphyAppPage } from './../../e2e/app.po';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';
import { ClipboardModule } from 'ngx-clipboard';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeedComponent } from './components/feed/feed.component';

import { GiphyService } from './services/giphy.service';
import { PagerService } from './services/pager.service';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FeedComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		NgxPaginationModule,
		ClipboardModule
	],
	providers: [ GiphyService, PagerService ],
	bootstrap: [AppComponent]
})
export class AppModule { }
