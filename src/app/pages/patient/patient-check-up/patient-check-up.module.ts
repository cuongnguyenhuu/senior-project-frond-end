import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PatientCheckUpComponent } from './patient-check-up/patient-check-up.component';
import { CheckUpComponent } from './check-up/check-up.component';
import { ResultCheckUpComponent } from './result-check-up/result-check-up.component';
import { DoctorsRecommendingComponent } from './doctors-recommending/doctors-recommending.component';
import { ChartsModule } from 'ng2-charts';

import { PatientCheckUpService } from './services/patient-check-up-services/patient-check-up.service';
import { PatientAddResultService } from './services/patient-add-result/patient-add-result.service';
import { PatientRecommendationService } from './services/patient-recommendation/patient-recommendation.service';
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
    RouterModule
  ],
  providers:[
    PatientCheckUpService,
    PatientAddResultService,
    PatientRecommendationService
  ],
  exports: [
    PatientCheckUpComponent
  ]
})
export class PatientCheckUpModule { }
