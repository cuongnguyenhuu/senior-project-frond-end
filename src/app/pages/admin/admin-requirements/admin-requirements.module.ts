import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from'@angular/forms';
import { RequirementComponent } from './requirement/requirement.component';

@NgModule({
  declarations: [
    RequirementComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminRequirementsModule { }
