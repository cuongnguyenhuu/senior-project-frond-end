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
export class PatientRecommendationService {
  
  public API:string;

  constructor(
    public http:HttpClient,
    public api:API
  ) { 
    this.API = api.getLink()+ "/api/";
  }

  public recommendDoctors() : Observable<any>{
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    return this.http.get(this.API+"patient/recommend/Dermatologist",httpOptions);
  }
}
