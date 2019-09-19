import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindDoctorsComponent } from './find-doctors/find-doctors.component';
import { ScheduleComponent } from '../../../components/schedule/schedule.component';
import { ConfirmDialogComponent } from '../../../components/confirm-dialog/confirm-dialog.component';
import { NotifDialogComponent } from '../../../components/notif-dialog/notif-dialog.component';
import { UpdateScheduleComponent } from '../../../components/update-schedule/update-schedule.component';


@NgModule({
  declarations: [
    UpdateScheduleComponent,
    FindDoctorsComponent,
    ScheduleComponent,
    ConfirmDialogComponent,
    NotifDialogComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FindDoctorsComponent,
    ScheduleComponent,
  ]
})
export class PatientFindDoctorsModule { }
