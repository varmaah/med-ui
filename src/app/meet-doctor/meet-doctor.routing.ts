import { MeetDoctorComponent } from './meet-doctor.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component:MeetDoctorComponent },
];

export const MeetDoctorRoutes:ModuleWithProviders = RouterModule.forChild(routes);
