import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import {Observable } from 'rxjs';
import { Schedule } from 'src/app/models/schedule';
import { BookingRequest } from 'src/app/models/bookingRequest';
import { Time } from 'src/app/models/time';

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private API:string = "http://ec2-13-229-134-141.ap-southeast-1.compute.amazonaws.com:8080/api/";

  constructor(
    private http: HttpClient,
  ) { }

  public getScheduleByUsername(username,week) : Observable<any>{
    return this.http.get<any>(this.API+"utility/schedules/"+username+"/"+week+"/",httpOptions);
  }

  public getSchedule(week:number) : Observable<any>{
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    return this.http.get<any>(this.API+"doctor/schedule/detail/"+week+"/",httpOptions);
  }

  public updateSchedule(timePerAppointment, preBook, startAt, endAt):Observable<any>{
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    return this.http.post<any>(this.API+"doctor/schedule/",
    {"timePerAppointment":timePerAppointment,"preBooking":preBook,"startAt":startAt,"endAt":endAt},
    httpOptions);
  }

  public setTimeBusy(type,times:Time[]){
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    return this.http.post<any>(this.API+"doctor/schedule/update/"+type+"/",times,httpOptions);
  }

  public bookAppointment(usernameDoctor:string,bookingRequest:BookingRequest){
    if(httpOptions.headers.get("Authorization")==null){
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization",token);
    }
    return this.http.put<any>(this.API+"patient/schedules/"+usernameDoctor+"/book/",bookingRequest,httpOptions);
  }

  public getFindingDoctors(textSearch,speciallist,country,city,district) : Observable<any>{
    if (httpOptions.headers.get("Authorization") == null) {
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization", token);
    }
    return this.http.get<any>(this.API + "patient/findDoctor/", { headers: httpOptions.headers, params : {
        "textSearch": textSearch,
        "speciallist": speciallist,
        "country": country,
        "city": city,
        "district": district
      }});
  }
}
