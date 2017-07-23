import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';

const routes: Routes = [
{path: '', component:AppComponent},
{ path: 'album-details/:album_id', component: AlbumDetailComponent }];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  	exports: [ RouterModule ]
})

export class AppRoutingModule {}