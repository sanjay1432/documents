import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { AppComponent } from './app.component';
import { DocumentsService } from './documents.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,PdfViewerModule
  ],
  providers: [DocumentsService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
