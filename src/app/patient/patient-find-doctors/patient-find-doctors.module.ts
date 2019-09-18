import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FindDoctorsComponent } from './find-doctors/find-doctors.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ConfirmDialogComponent } from './../../components/confirm-dialog/confirm-dialog.component';
import { NotifDialogComponent } from './../../components/notif-dialog/notif-dialog.component';

const routes: Routes = [
  {
      path: 'patient/find-doctors',
      component: FindDoctorsComponent,
  },
  {
    path: 'patient/find-doctors/doctorId/schedule',
    component: ScheduleComponent,
  }
];

@NgModule({
  declarations: [
    FindDoctorsComponent,
    ScheduleComponent,
    ConfirmDialogComponent,
    NotifDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PatientFindDoctorsModule { }
