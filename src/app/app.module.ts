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
import { AlbumService } from './album.service'
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumDetailComponent,
    DashboardComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,   
    // NgStyle,
    NgbModule.forRoot()
  ],
  providers: [ AlbumService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
