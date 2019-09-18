import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './../../components/profile/profile.component';

const routes: Routes = [
  {
      path: 'patient/profile',
      component: ProfileComponent,
  },
];
@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PatientProfileModule { }
