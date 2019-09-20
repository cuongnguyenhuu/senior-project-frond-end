import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import {Observable } from 'rxjs';
import { Router } from '@angular/router';

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  private API:string = "http://localhost:8080/api/";
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public login(username, password): Observable<any>{
    return this.http.post<any>(this.API+'utility/login',{username,password},httpOptions);
  }

  public getBasicInfor():Observable<any>{
    var token ="Bearer " + JSON.parse(localStorage.getItem("token")).token;
    console.log("token: "+token);
    httpOptions.headers = httpOptions.headers.append("Authorization",token);
    return this.http.get<any>(this.API+'utility/basic_infor',httpOptions);
  }

  public logout(){
    localStorage.removeItem('token');
    location.href = "/";
  }
}
