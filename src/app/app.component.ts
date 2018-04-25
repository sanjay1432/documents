import { Component , ViewChild} from '@angular/core';
import { DocumentsService } from './documents.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  fileToShow: any;
  fileType: string;
  constructor( private document: DocumentsService,public sanitizer: DomSanitizer) {
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
