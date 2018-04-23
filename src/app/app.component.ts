import { Component } from '@angular/core';
import { DocumentsService } from './documents.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private document: DocumentsService,public sanitizer: DomSanitizer) {
    this.getDocument()
   }

 getDocument(){
   let url = '6c3abb82-fb69-43d7-965d-3eacb2374649';
  this.document.getDocuments(url).subscribe(data => {
      console.log(data)
      this.createImageFromBlob(data);
  });
 }

 imageToShow: any;

createImageFromBlob(image: Blob) {
       let reader = new FileReader();
       reader.addEventListener("load", () => {
         console.log(reader.result)
          this.imageToShow = reader.result;
       }, false);

       if (image) {
          reader.readAsDataURL(image);
       }
}
}
