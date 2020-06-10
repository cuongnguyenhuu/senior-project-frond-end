import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { API } from './../../models/API';
let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  public API: string ;
  public appointment;

  constructor(
    public http: HttpClient,
    public api: API
  ) { 
    this.API = api.getLink()+ "/api/";
  }

  public getPatientAppointments(pageIndex,search,status,sortBy): Observable<any> {
    if (httpOptions.headers.get("Authorization") == null) {
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization", token);
    }
    return this.http.get<any>(this.API + "patient/appointments/", { headers : httpOptions.headers, params: {
      "pageIndex":pageIndex,
      "search":search,
      "status":status,
      "sortBy":sortBy,
    }});
  }


  public getDoctorAppointments(pageIndex,search,status,sortBy): Observable<any> {
    if (httpOptions.headers.get("Authorization") == null) {
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization", token);
    }
    return this.http.get<any>(this.API + "doctor/appointments/", { headers : httpOptions.headers, params: {
      "pageIndex":pageIndex,
      "search":search,
      "status":status,
      "sortBy":sortBy,
    }});
  }

  public getDetailAppointment(): any{
    return this.appointment;
  }

  public setDetailAppointment(appointment){
    this.appointment = appointment;
  }

  public patientCancelAppointment(id,message) : Observable<any>{
    if (httpOptions.headers.get("Authorization") == null) {
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization", token);
    }
    return this.http.put<any>(this.API + "patient/appointment/"+id+"/", message, httpOptions)
  }

  public doctorCancelAppointment(id,message) : Observable<any>{
    if (httpOptions.headers.get("Authorization") == null) {
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization", token);
    }
    return this.http.put<any>(this.API + "doctor/appointment/"+id+"/", message, httpOptions)
  }

  public doctorNoteAppointment(id,note) : Observable<any>{
    if (httpOptions.headers.get("Authorization") == null) {
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization", token);
    }
    return this.http.put<any>(this.API + "doctor/appointment/note/"+id+"/", note, httpOptions)
  }

  public getDetailAppointmentByDoctor(id){
    if (httpOptions.headers.get("Authorization") == null) {
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization", token);
    }
    return this.http.get<any>(this.API+"doctor/appointment/"+id+"/",httpOptions)
  }

  public getDetailAppointmentByPatient(id){
    if (httpOptions.headers.get("Authorization") == null) {
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization", token);
    }
    return this.http.get<any>(this.API+"patient/appointment/"+id+"/",httpOptions)
  }

  public getAppointmentOverview(){
    if (httpOptions.headers.get("Authorization") == null) {
      var token = "Bearer " + JSON.parse(localStorage.getItem("token")).token;
      httpOptions.headers = httpOptions.headers.append("Authorization", token);
    }
    return this.http.get<any>(this.API+"admin/overview/",httpOptions);
  }
}
