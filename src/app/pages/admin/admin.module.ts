import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminOverviewModule } from './admin-overview/admin-overview.module';
import { AdminUsersModule } from './admin-users/admin-users.module';
import { AdminUserModule } from './admin-user/admin-user.module';
import { AdminRequirementsModule } from './admin-requirements/admin-requirements.module';
import { SharedModule } from './../shared/shared.module';
import { FormsModule} from '@angular/forms';

import { BodyAdminComponent } from './body-admin/body-admin.component';
import { SideBarAdminComponent } from './side-bar-admin/side-bar-admin.component';
import { OverviewComponent } from './admin-overview/overview/overview.component';
import { UsersComponent } from './admin-users/users/users.component';
import { UserComponent } from './admin-user/user/user.component';
import { RequirementComponent } from './admin-requirements/requirement/requirement.component';


const routes: Routes = [
  {
    path: '',
    component:BodyAdminComponent,
    children:[
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'users/:role/:username/detail',
        component: UserComponent,
      },
      {
        path: 'requirements',
        component: RequirementComponent,
      }
    ]
    
  }
];

@NgModule({
  declarations: [
    BodyAdminComponent,
    SideBarAdminComponent,
  ],
  imports: [
    CommonModule,
    AdminOverviewModule,
    AdminUsersModule,
    AdminUserModule,
    AdminRequirementsModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
