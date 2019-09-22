import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import {Observable } from 'rxjs';
import { Schedule } from 'src/app/models/schedule';

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private API:string = "http://localhost:8080/api/";

  constructor(
    private http: HttpClient,
  ) { }

  public getScheduleByUsername(username) : Observable<any>{
    return this.http.get<any>(this.API+"utility/schedules/"+username,httpOptions);
  }

  public getSchedule() : Observable<any>{
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    return this.http.get<any>(this.API+"doctor/schedule/",httpOptions);
  }

  public updateSchedule(scheduleEntities:any):Observable<any>{
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    return this.http.post<any>(this.API+"doctor/schedule/update",scheduleEntities,httpOptions);
  }

  public getScheduleUpdate() : Observable<any>{
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    return this.http.get<any>(this.API+"doctor/schedule/update/",httpOptions);
  }
}
