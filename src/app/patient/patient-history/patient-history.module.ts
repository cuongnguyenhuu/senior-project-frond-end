import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
      path: 'patient/history',
      component: HistoryComponent,
  },
];


@NgModule({
  declarations: [
    HistoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PatientHistoryModule { }
