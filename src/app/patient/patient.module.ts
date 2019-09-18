import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PatientHomeModule } from './patient-home/patient-home.module';
import { PatientCheckUpModule } from './patient-check-up/patient-check-up.module';
import { PatientAppointmentsModule } from './patient-appointments/patient-appointments.module';
import { PatientFindDoctorsModule } from './patient-find-doctors/patient-find-doctors.module';
import { PatientHistoryModule } from './patient-history/patient-history.module';
import { PatientMessagesModule } from './patient-messages/patient-messages.module';
import { PatientProfileModule } from './patient-profile/patient-profile.module';

const routes: Routes = [
  {
    path: 'patient',
    redirectTo:'patient/home',
    pathMatch:'full',
    // component: PatientComponent,
//     children: [
//       {
//         path: '',
//         redirectTo:'home',
//         pathMatch:'full'
//       },
//       // {
//       //   path: 'list',
//       //   component: ProductListComponent
//       // },
//       // {
//       //   path: 'create',
//       //   component: ProductCreateComponent
//       // },
//       // {
//       //   path: 'detail',
//       //   component: ProductDetailComponent
//       // }
//     ]
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PatientHomeModule,
    PatientCheckUpModule,
    PatientAppointmentsModule,
    PatientFindDoctorsModule,
    PatientHistoryModule,
    PatientMessagesModule,
    PatientProfileModule,
    RouterModule.forChild(routes)
  ]
})
export class PatientModule { }
