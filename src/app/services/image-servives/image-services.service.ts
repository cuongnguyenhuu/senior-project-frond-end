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
export class ImageServicesService {

  private API:string ;

  constructor(
    private http: HttpClient,
    private api:API
  ) { 
    this.API = api.getLink()+ "/api/";
  }

  public updateAvatar(image): Observable<any>{
    if (httpOptions.headers.get("Authorization") == null) {
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization", token);
    }
    return this.http.post<any>(this.API+"utility/updateAvatar", image, httpOptions);
  }

  public uploadImage(file:File):Observable<any>{
    var fromdata = new FormData();
    fromdata.append("file",file);
    return this.http.post(this.API+"uploadFile",fromdata);
  }

  public addDisease(images,name, description):Observable<any>{
    if (httpOptions.headers.get("Authorization") == null) {
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization", token);
    }
    return this.http.post(this.API+"doctor/addDisease/",
    {
      "name":name,
      "description":description,
      "images":images
    },httpOptions);
  }
}
