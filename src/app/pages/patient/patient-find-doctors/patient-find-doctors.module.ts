import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FindDoctorsComponent } from './find-doctors/find-doctors.component';


@NgModule({
  declarations: [
    FindDoctorsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    FindDoctorsComponent,
  ]
})
export class PatientFindDoctorsModule { }
