import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalServicesService {

  constructor(
    public httpClient: HttpClient
  ) { }

  public getLocal() : Observable<any>{
    return this.httpClient.get("./assets/local.json");
  }

  public getSpecialists(): Observable<any>{
    return this.httpClient.get("./assets/specialists.json");
  }

  public getDiseases() : Observable<any>{
    return this.httpClient.get("./assets/diseases.json");
  }
}
