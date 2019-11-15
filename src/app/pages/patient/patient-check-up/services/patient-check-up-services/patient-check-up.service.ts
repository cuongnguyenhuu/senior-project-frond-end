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

  private API:string = "http://ec2-18-141-57-77.ap-southeast-1.compute.amazonaws.com:8000/predict/";

  constructor(
    private http:HttpClient,
  ) { }

  public checkUp(link_image:string): Observable<any>{
    return this.http.post(this.API,{"link_image":link_image},httpOptions);
  }
}
