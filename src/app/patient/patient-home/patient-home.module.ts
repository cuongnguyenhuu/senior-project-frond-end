import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomebodyComponent } from './homebody/homebody.component';

const routes: Routes = [
  {
  path: 'patient/home',
      component: HomebodyComponent,
      // children: [
      //   {
      //     path: '',
      //     component: HomebodyComponent,
      //   },
      //   {
      //     path: '**',
      //     component: HomebodyComponent,
      //   },
      // ]
  }
  
];

@NgModule({
  declarations: [
    HomebodyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PatientHomeModule { }
