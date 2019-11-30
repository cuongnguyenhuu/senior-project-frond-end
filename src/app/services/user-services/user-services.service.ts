import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import {Observable } from 'rxjs';
import { Router } from '@angular/router';

import { patientRegister } from './../../models/patientRegister';
import { doctorRegsiter } from 'src/app/models/doctorRegister';
import { API } from 'src/app/models/API';

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  private API:string;
  constructor(
    private http: HttpClient,
    private router: Router,
    private api: API
  ) {
    console.log(api.getLink())
    this.API = api.getLink()+ "/api/";
   }

  public login(username, password): Observable<any>{
    return this.http.post<any>(this.API+'utility/login',{username,password},httpOptions);
  }

  // public getBasicInfor():Observable<any>{
  //   var token ="Bearer " + JSON.parse(localStorage.getItem("token")).token;
  //   console.log("token: "+token);
  //   httpOptions.headers = httpOptions.headers.append("Authorization",token);
  //   return this.http.get<any>(this.API+'utility/basic_infor',httpOptions);
  // }

  public checkTokenValidate(){
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    return this.http.get<any>(this.API+'check_token_validate',httpOptions);
  }

  public logout(){
    localStorage.removeItem('token');
    location.href = "/";
  }

  public patientRegister(data:patientRegister){
    return this.http.post<any>(this.API+"utility/patient/register",data,httpOptions);
  }

  public doctorRegister(data:doctorRegsiter){
    return this.http.post<any>(this.API+"utility/doctor/register",data,httpOptions);
  }

  public getPatientProfile(){
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    return this.http.get<any>(this.API+"patient/profile/",httpOptions);
  }

  public updatePatientProfile(updatePatientProfile){
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    return this.http.put<any>(this.API+"patient/profile/",updatePatientProfile,httpOptions);
  }

  public getDoctorProfile(){
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    return this.http.get<any>(this.API+"doctor/profile/",httpOptions);
  }

  public updateDoctorProfile(updateDoctorProfile){
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    return this.http.put<any>(this.API+"doctor/profile/",updateDoctorProfile,httpOptions);
  }

  public getAllUsers(textSearch, role, status, pageIndex):Observable<any>{
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    return this.http.get<any>(this.API+"admin/users/",{
      headers: httpOptions.headers,
      params:{
        "textsearch": textSearch,
        "role": role,
        "status": status,
        "pageIndex": pageIndex
      }
    });
  }

  public getUserByUsername(username, role):Observable<any>{
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    return this.http.get<any>(this.API+"admin/users/"+role+"/"+username,httpOptions);
  }

  public toggleStatusAccount(username){
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    return this.http.post<any>(this.API+"admin/users/"+username+"/band",httpOptions);
  }

  public getApprovingAccounts(textSearch,sortBy,pageIndex){
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    return this.http.get<any>(this.API+"admin/approvings/",{
      headers: httpOptions.headers,
      params:{
        "textSearch": textSearch,
        "sortBy": sortBy,
        "pageIndex": pageIndex
      }
    });
  }

  public setApprovingAccount(username){
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    return this.http.post<any>(this.API+"admin/approving/"+username,httpOptions);
  }
}
