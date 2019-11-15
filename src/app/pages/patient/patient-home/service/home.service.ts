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

  private API:string = "http://ec2-13-229-134-141.ap-southeast-1.compute.amazonaws.com:8080/api/";

  constructor(
    private http: HttpClient,
  ) { }

  public getDataHomeBody():Observable<any>{
    return this.http.get(this.API+"utility/homebody/",httpOptions);
  }
}
