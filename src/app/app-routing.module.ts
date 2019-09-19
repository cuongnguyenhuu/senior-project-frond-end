import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';

const routes: Routes = [
  {
    path:'patient',
    loadChildren: () => import('./../../src/app/pages/patient/patient.module').then(m=>m.PatientModule)
  },
  {
    path:'doctor',
    loadChildren: () => import('./../../src/app/pages/doctor/doctor.module').then(m=>m.DoctorModule)
  },
  {
    path:'admin',
    loadChildren: () => import('./../../src/app/pages/admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path: '',
    redirectTo: 'patient/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { 
      preloadingStrategy: PreloadAllModules 
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
