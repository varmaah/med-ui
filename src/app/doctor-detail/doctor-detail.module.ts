import { DoctorDetailRoutes } from './doctor-detail.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDetailComponent } from './doctor-detail.component';

@NgModule({
  imports: [
    CommonModule, DoctorDetailRoutes
  ],
  declarations: [DoctorDetailComponent]
})
export class DoctorDetailModule { }
