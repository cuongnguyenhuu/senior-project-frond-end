import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppointmentService } from './../../services/appointment-services/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  public ROLE: string;
  public appointments: any[] = [];
  public totalPages: number[];
  public currentPage: number;
  public currentTime: number;
  public statuses = ["All", "Waiting", "Done", "Canceled"];
  public sortByList = ["Newest", "Oldest"]
  //filter
  public search = "";
  public status = "All";
  public sortBy = "Newest";
  //dialog
  public open_confirm: boolean = false;
  public timeCancel: any;
  public appointmentCancel: any;

  constructor(
    public appointmentService: AppointmentService,
    public router: Router
  ) { }

  ngOnInit() {
    this.ROLE = JSON.parse(localStorage.getItem("token")).role[0].authority;
    this.getAppointmentByPageIndex(0);
  }

  public getAppointmentByPageIndex(pageIndex) {
    this.currentTime = new Date().getTime();
    if (this.ROLE == 'ROLE_PATIENT') {
      this.appointmentService.getPatientAppointments(pageIndex, this.search, this.status, this.sortBy).subscribe(data => {
        console.log(data);
        this.appointments = data.result;
        this.totalPages = new Array(data.totalPages);
        this.currentPage = data.currentPage;
      },
        error => {
          console.log(error);
        })
    } else {
      this.appointmentService.getDoctorAppointments(pageIndex, this.search, this.status, this.sortBy).subscribe(data => {
        console.log(data);
        this.appointments = data.result;
        this.totalPages = new Array(data.totalPages);
        this.currentPage = data.currentPage;
      },
        error => {
          console.log(error);
        })
    }
  }

  public changeStatus(status) {
    // if(status != "Booked")
    this.status = status;
    // else
    // this.status = "Waiting"
    this.filter();
  }

  public changeSortBy(sortBy) {
    this.sortBy = sortBy;
    this.filter();
  }

  public filter() {
    this.ngOnInit();
  }

  public moveToDetail(data) {
    this.appointmentService.setDetailAppointment(data);
    if (this.ROLE == 'ROLE_PATIENT')
      this.router.navigateByUrl("patient/appointments/detail/"+data.id);
    if (this.ROLE == 'ROLE_DOCTOR')
      this.router.navigateByUrl("doctor/appointments/detail/"+data.id);
  }

  public cancelAppointment(message) {
    if (this.ROLE == 'ROLE_PATIENT') {
      this.appointmentService.patientCancelAppointment(this.appointmentCancel.id, message).subscribe(data => {
        console.log(data);
        this.ngOnInit();
      }, error => {
        console.log(error);
      })
    }
    if (this.ROLE == 'ROLE_DOCTOR') {
      this.appointmentService.doctorCancelAppointment(this.appointmentCancel.id, message).subscribe(data => {
        console.log(data);
        this.ngOnInit();
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
