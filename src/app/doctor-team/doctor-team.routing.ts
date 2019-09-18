
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorTeamComponent } from './doctor-team.component';

const routes: Routes = [
  { path: '', component:DoctorTeamComponent },
];

export const DoctorTeamRoutes: ModuleWithProviders = RouterModule.forChild(routes);
