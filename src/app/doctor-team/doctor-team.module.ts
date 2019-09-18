
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorTeamComponent } from './doctor-team.component';
import { DoctorTeamRoutes } from './doctor-team.routing';

@NgModule({
  imports: [
    CommonModule,
    DoctorTeamRoutes
  ],
  declarations: [DoctorTeamComponent]
})
export class DoctorTeamModule { }
