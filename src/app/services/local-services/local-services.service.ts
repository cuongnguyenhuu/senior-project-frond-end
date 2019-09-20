import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalServicesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLocal() : Observable<any>{
    return this.httpClient.get("./assets/local.json");
  }
}
