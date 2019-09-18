import { DoctorDetailComponent } from './doctor-detail.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component:DoctorDetailComponent },
];

export const DoctorDetailRoutes: ModuleWithProviders = RouterModule.forChild(routes);
