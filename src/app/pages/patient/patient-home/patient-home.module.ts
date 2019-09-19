import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomebodyComponent } from './homebody/homebody.component';

@NgModule({
  declarations: [
    HomebodyComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomebodyComponent
  ]
})
export class PatientHomeModule { }
