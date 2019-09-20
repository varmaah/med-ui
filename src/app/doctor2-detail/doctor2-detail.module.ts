import { Doctor2DetailRoutes } from './doctor2-detail.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doctor2DetailComponent } from './doctor2-detail.component';

@NgModule({
  imports: [
    CommonModule, Doctor2DetailRoutes
  ],
  declarations: [Doctor2DetailComponent]
})
export class Doctor2DetailModule { }
