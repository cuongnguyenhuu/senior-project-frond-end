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

  private data;
  private currentTime = new Date().getTime();

  //dialog
  private open_confirm: boolean = false;
  private timeCancel: any;
  private appointmentCancel: any;

  private ROLE;
  private id;
  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
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
}
