import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContributeComponent } from './contribute/contribute.component';


@NgModule({
  declarations: [
    ContributeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DoctorContributeModule { }
