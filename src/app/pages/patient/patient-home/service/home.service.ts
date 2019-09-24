import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import {Observable } from 'rxjs';

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private API:string = "http://localhost:8080/api/";

  constructor(
    private http: HttpClient,
  ) { }

  public getDataHomeBody():Observable<any>{
    return this.http.get(this.API+"utility/homebody/",httpOptions);
  }
}
