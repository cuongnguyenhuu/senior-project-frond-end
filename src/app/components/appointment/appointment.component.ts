import { Component, OnInit, Input } from '@angular/core';
import { AppointmentService } from './../../services/appointment-services/appointment.service';
import { Router } from '@angular/router'
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

  constructor(
    private appointmentService: AppointmentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ROLE = JSON.parse(localStorage.getItem("token")).role[0].authority;
    this.data = this.appointmentService.getDetailAppointment();
    if (this.data == null) {
      if (this.ROLE == 'ROLE_PATIENT')
        this.router.navigateByUrl("/patient/appointments");
      if (this.ROLE == 'ROLE_DOCTOR')
        this.router.navigateByUrl("/doctor/appointments");
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
