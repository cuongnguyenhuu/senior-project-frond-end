import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { PatientCheckUpComponent } from './patient-check-up/patient-check-up.component';
import { CheckUpComponent } from './check-up/check-up.component';
import { ResultCheckUpComponent } from './result-check-up/result-check-up.component';
import { DoctorsRecommendingComponent } from './doctors-recommending/doctors-recommending.component';

const routes: Routes = [
  {
  path: 'patient/check-up',
      component: PatientCheckUpComponent,
      // children: [
      //   {
      //     path: '',
      //     component: CheckUpComponent
      //   },
      // ]
  }
];
@NgModule({
  declarations: [
    PatientCheckUpComponent,
    CheckUpComponent,
    ResultCheckUpComponent,
    DoctorsRecommendingComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule.forChild(routes)
  ]
})
export class PatientCheckUpModule { }
