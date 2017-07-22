import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }    from '@angular/http';
import { NgStyle } from '@angular/common';
import { RouterModule }   from '@angular/router';
// import { NgbdTypeaheadBasic } from './typeahead-basic';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { AlbumDetailComponent } from './album-detail.component';
import { SpotifyService } from './spotify.service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlbumDetailComponent,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'album-details',
        component: AlbumDetailComponent
      }
    ]),
    // NgStyle,
    NgbModule.forRoot()
  ],
  providers: [ SpotifyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }