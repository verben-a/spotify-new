import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailComponent } from './album-detail.component';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
	{path: '', component: DashboardComponent},
	{ path: 'album-details/:album_id', component: AlbumDetailComponent }];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})

export class AppRoutingModule {}