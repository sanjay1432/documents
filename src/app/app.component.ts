import { Component , ViewChild} from '@angular/core';
import { DocumentsService } from './documents.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  doc: string;
  mediaUrl: string;
  fileToShow: any;
  fileType: string;
  constructor( private document: DocumentsService,public sanitizer: DomSanitizer) {
   }
  
 getURL(url,type){
   console.log(url)
   console.log(type)
   this.fileType = type; 
   this.mediaUrl = this.document.getURL(url);

   this.doc = 'http://docs.google.com/gview?url='+this.mediaUrl+'&embedded=true';
   console.log( this.mediaUrl)
 }  
 getDocument(url){
  this.fileType = '';
  this.document.getDocuments(url).subscribe(data => {
      this.fileType = data.type;
      this.createMediaFromBlob(data);
  });
 }

 

 createMediaFromBlob(file: Blob) {
       let reader = new FileReader();
       reader.addEventListener("load", () => {
          this.fileToShow = reader.result;
       }, false);

       if (file) {
          reader.readAsDataURL(file);
       }
}
}
