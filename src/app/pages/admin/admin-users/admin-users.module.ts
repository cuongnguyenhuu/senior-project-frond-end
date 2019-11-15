import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from'@angular/forms';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class AdminUsersModule { }
