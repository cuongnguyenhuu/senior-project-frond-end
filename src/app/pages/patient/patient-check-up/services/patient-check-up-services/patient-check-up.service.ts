import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import {Observable } from 'rxjs';


let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PatientCheckUpService {

  private API:string = "http://127.0.0.1:8000/predict/"

  constructor(
    private http:HttpClient,
  ) { }

  public checkUp(link_image:string): Observable<any>{
    return this.http.post(this.API,{"link_image":link_image},httpOptions);
  }
}
