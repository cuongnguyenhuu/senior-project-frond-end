import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryComponent } from './history/history.component';
import { SharedModule } from './../../shared/shared.module';

import { HistoryService } from './services/history-service/history.service';

import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    HistoryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    HistoryComponent,
  ],
  providers: [
    HistoryService
  ]
})
export class PatientHistoryModule { }
