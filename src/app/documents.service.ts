import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { environment } from '../environments/environment';
import "rxjs";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import { HttpClient } from "@angular/common/http";

// rxjs
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";
import "rxjs/add/operator/map"; @Injectable()
export class DocumentsService {

  constructor(private _http: Http, protected httpClient: HttpClient) { }

  // getDocuments(imageUrl: string): Observable<Blob>{
  //   console.log(environment.url+'e876b2df-93ba-42a0-a67d-697281383066'+environment.endpoint)
  //   return this._http.get(environment.url+imageUrl+environment.endpoint,{responseType: "blob"})
  // }

  // public getDocuments(imageUrl: string): Observable<Blob> {
  //   return this.httpClient
  //     .get(environment.url+imageUrl+environment.endpoint, {
  //       responseType: "blob"
  //     });
  // }


  getDocuments(imageUrl: string) {
    let url = environment.url + imageUrl + environment.endpoint;
    // return new Observable((observer) => {


     return  this.httpClient
        .get(url, {
          // headers: this.getHeaders(),
          responseType: 'blob'
        })
        .map(m =>m);
      // return () => {
      //   if (objectUrl) {
      //     console.log(objectUrl)
      //     URL.revokeObjectURL(objectUrl);
      //     objectUrl = null;
      //   }
      // };
    // });

  }
  // getHeaders(): HttpHeaders{
  //   let headers = new HttpHeaders();

  //   return headers;
  // }

}



