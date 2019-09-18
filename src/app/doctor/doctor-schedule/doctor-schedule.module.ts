import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from '../../components/schedule/schedule.component';

const routes: Routes = [
  {
    path: 'doctor/schedule',
    component: ScheduleComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DoctorScheduleModule { }
