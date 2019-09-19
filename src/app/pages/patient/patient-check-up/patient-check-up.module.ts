import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { PatientCheckUpComponent } from './patient-check-up/patient-check-up.component';
import { CheckUpComponent } from './check-up/check-up.component';
import { ResultCheckUpComponent } from './result-check-up/result-check-up.component';
import { DoctorsRecommendingComponent } from './doctors-recommending/doctors-recommending.component';

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
  ],
  exports: [
    PatientCheckUpComponent
  ]
})
export class PatientCheckUpModule { }
