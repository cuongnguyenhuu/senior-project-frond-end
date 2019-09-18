import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './../../components/chat/chat.component';

const routes: Routes = [
  {
      path: 'patient/messages',
      component: ChatComponent,
  },
];

@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PatientMessagesModule { }
