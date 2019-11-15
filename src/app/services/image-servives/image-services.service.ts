import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import {Observable } from 'rxjs';

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ImageServicesService {

  private API:string = "http://ec2-13-229-134-141.ap-southeast-1.compute.amazonaws.com:8080/api/";

  constructor(
    private http: HttpClient,
  ) { }

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
