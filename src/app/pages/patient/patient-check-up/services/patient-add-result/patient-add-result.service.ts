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
  
  private API:string = "http://ec2-13-229-134-141.ap-southeast-1.compute.amazonaws.com:8080/api/";

  constructor(
    private http:HttpClient,
  ) { }

  public addResult(image,result) : Observable<any>{
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    console.log("image_upload: "+image+"/"+result);
    return this.http.post(this.API+"patient/history/", {"image":image,"result":result},httpOptions);
  }
}
