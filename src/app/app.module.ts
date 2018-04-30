import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { AppComponent } from './app.component';
import { DocumentsService } from './documents.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { DocumentViewModule } from 'ngx-document-view';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,PdfViewerModule,VgCoreModule,
    VgControlsModule,VgOverlayPlayModule,VgBufferingModule,DocumentViewModule
  ],
  providers: [DocumentsService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
