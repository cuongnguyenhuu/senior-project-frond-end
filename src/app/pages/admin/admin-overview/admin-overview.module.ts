import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms'
import { ChartsModule } from 'ng2-charts';

import { OverviewComponent } from './overview/overview.component';
import { LineChartComponent } from './line-chart/line-chart.component';


@NgModule({
  declarations: [
    OverviewComponent,
    LineChartComponent,

  ],
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule
  ]
})
export class AdminOverviewModule { }
