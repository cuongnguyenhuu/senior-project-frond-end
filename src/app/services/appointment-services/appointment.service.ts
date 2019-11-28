import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private API: string = "http://ec2-13-250-122-234.ap-southeast-1.compute.amazonaws.com:8080/api/";
  private appointment;

  constructor(
    private http: HttpClient,
  ) { }

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
