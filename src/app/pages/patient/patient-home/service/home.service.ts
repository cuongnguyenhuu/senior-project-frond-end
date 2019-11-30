import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import {Observable } from 'rxjs';
import { API } from 'src/app/models/API';

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private API:string;

  constructor(
    private http: HttpClient,
    private api:API
  ) {
    this.API = api.getLink()+ "/api/";
   }

  public getDataHomeBody():Observable<any>{
    return this.http.get(this.API+"utility/homebody/",httpOptions);
  }
}
