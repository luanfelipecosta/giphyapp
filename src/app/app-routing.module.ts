import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { FeedComponent } from './components/feed/feed.component';

const routes: Routes = [
	{ path: '', redirectTo: '/trending', pathMatch: 'full' },
	{ path: 'trending',  	component: FeedComponent },
	{ path: 'search/:q',    component: FeedComponent },
];
 
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}