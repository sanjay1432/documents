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

  getDocuments(imageUrl: string) {
    let url = environment.url + imageUrl + environment.endpoint;
     return  this.httpClient
        .get(url, {
          responseType: 'blob'
        })
        .map(m =>m);


  }

  getURL(url: string){
    return environment.url + url + environment.endpoint;
  }

}



