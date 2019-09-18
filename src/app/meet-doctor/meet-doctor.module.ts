import { MeetDoctorRoutes } from './meet-doctor.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetDoctorComponent } from './meet-doctor.component';

@NgModule({
  imports: [
    CommonModule, MeetDoctorRoutes
  ],
  declarations: [MeetDoctorComponent]
})
export class MeetDoctorModule { }
