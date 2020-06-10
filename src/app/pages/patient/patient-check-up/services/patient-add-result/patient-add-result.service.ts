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
export class PatientAddResultService {
  
  public API:string;

  constructor(
    public http:HttpClient,
    public api:API
  ) {
    this.API = api.getLink()+ "/api/";
   }

  public addResult(image,result) : Observable<any>{
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    console.log("image_upload: "+image+"/"+result);
    return this.http.post(this.API+"patient/history/", {"image":image,"result":result},httpOptions);
  }
}
