import { Component, OnInit, Input } from '@angular/core';
import { AppointmentService } from './../../services/appointment-services/appointment.service';
import { Router, ActivatedRoute } from '@angular/router'
import {Location} from '@angular/common';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  public data;
  public currentTime = new Date().getTime();

  //dialog
  public open_confirm: boolean = false;
  public timeCancel: any;
  public appointmentCancel: any;

  public open_note: boolean = false;
  public textNote;
  public ROLE;
  public id;
  
  constructor(
    public appointmentService: AppointmentService,
    public router: Router,
    public route: ActivatedRoute,
    public location: Location
  ) { }

  ngOnInit() {
    this.ROLE = JSON.parse(localStorage.getItem("token")).role[0].authority;
    // this.data = this.appointmentService.getDetailAppointment();
    this.id = this.route.paramMap.subscribe(params=>{
      this.id = params.get("id");
      this.getdata();
    });
    console.log(this.id);
    
    
  }

  public getdata(){
    if (this.ROLE == 'ROLE_PATIENT'){
      this.appointmentService.getDetailAppointmentByPatient(this.id).subscribe(data => {
        console.log(data);
        this.data = data;
        // this.textNote = data.place;
        if(data==null){
          this.router.navigateByUrl("/patient/appointments");
        }
      }, error => {
        console.log(error);
      })
    }
    else if (this.ROLE == 'ROLE_DOCTOR'){
      this.appointmentService.getDetailAppointmentByDoctor(this.id).subscribe(data => {
        console.log(data);
        this.data = data;
        this.textNote = data.place;
        if(data==null){
          this.router.navigateByUrl("/doctor/appointments");
        }
      }, error => {
        console.log(error);
      })
    }
  }
  public cancelAppointment(message) {
    if (this.ROLE == 'ROLE_PATIENT') {
      this.appointmentService.patientCancelAppointment(this.appointmentCancel.id, message).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl("/patient/appointments");
      }, error => {
        console.log(error);
      })
    }
    if (this.ROLE == 'ROLE_DOCTOR') {
      this.appointmentService.doctorCancelAppointment(this.appointmentCancel.id, message).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl("/doctor/appointments");
      }, error => {
        console.log(error);
      })
    }
  }

  back(){
    this.location.back();
  }

  public setOpenConfirm(status) {
    this.open_confirm = status;
  }

  public showDialog(appointment) {
    console.log(appointment);
    this.appointmentCancel = appointment;
    this.timeCancel = appointment.time;
    this.open_confirm = true;
  }

  public noteAppointment(message){
    console.log(this.id);
    this.appointmentService.doctorNoteAppointment(this.data.id,message).subscribe(data=>{
      this.ngOnInit();
    });
  }

  public setOpenNote(status) {
    this.open_note = status;
  }

  public showNote() {
    this.open_note = true;
    console.log(this.textNote)
  }
}
