import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { JsonpModule } from '@angular/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule }    from '@angular/http';
import { NgStyle } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { AlbumDetailComponent, SafePipe } from './album-detail.component';
import { AlbumService } from './album.service';
import { DashboardComponent } from './dashboard.component';
// import { MdButtonModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    AlbumDetailComponent,
    DashboardComponent,
    SafePipe
  ],
  
  imports: [
  BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    // MdButtonModule,
    // MdMenuModule,
    // MdToolbarModule,
    // MdIconModule,
    // MdInputModule
    // NgStyle,
    // NgbModule.forRoot()
  ],
  providers: [ AlbumService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
