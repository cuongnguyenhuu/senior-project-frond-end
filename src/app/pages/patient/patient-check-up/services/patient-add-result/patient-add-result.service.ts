import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import {Observable } from 'rxjs';

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PatientAddResultService {
  
  private API:string = "http://localhost:8080/api/";

  constructor(
    private http:HttpClient,
  ) { }

  public addResult(image,result) : Observable<any>{
    var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
    httpOptions.headers = httpOptions.headers.append("Authorization",token);
    return this.http.post(this.API+"/patient/history", {"image":image,"result":result},httpOptions);
  }
}
