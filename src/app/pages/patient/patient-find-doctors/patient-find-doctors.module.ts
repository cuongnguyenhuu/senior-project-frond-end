import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindDoctorsComponent } from './find-doctors/find-doctors.component';


@NgModule({
  declarations: [
    FindDoctorsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FindDoctorsComponent,
  ]
})
export class PatientFindDoctorsModule { }
