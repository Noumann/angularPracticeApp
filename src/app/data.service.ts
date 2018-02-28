import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http:Http) { }

  getNews():Observable<any>{
    return this.http.get("https://jsonblob.com/api/jsonblob/7c336b8e-1cd0-11e8-8434-c571b980c55b")
    .map(obs => obs.json());
  }

}
