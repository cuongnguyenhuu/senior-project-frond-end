import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DoctorAppointmentsModule } from './doctor-appointments/doctor-appointments.module';
import { DoctorScheduleModule } from'./doctor-schedule/doctor-schedule.module';
const routes: Routes = [
  {
    path: 'doctor',
    redirectTo:'doctor/appointments',
    pathMatch:'full',
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DoctorAppointmentsModule,
    DoctorScheduleModule,
    RouterModule.forChild(routes)
  ]
})
export class DoctorModule { }
