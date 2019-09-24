import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomebodyComponent } from './homebody/homebody.component';

import { HomeService } from './service/home.service';

@NgModule({
  declarations: [
    HomebodyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[
    HomeService
  ],
  exports: [
    HomebodyComponent
  ]
})
export class PatientHomeModule { }
