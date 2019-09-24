import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import {Observable } from 'rxjs';

// let httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
// };
@Injectable({
  providedIn: 'root'
})
export class ImageServicesService {

  private API:string = "http://localhost:8080/api/";

  constructor(
    private http: HttpClient,
  ) { }

  public uploadImage(file:File):Observable<any>{
    var fromdata = new FormData();
    fromdata.append("file",file);
    return this.http.post(this.API+"utility/upload",fromdata);
  }
}
