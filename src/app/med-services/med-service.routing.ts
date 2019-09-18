import { ModuleWithProviders } from '@angular/core';
import { MedServicesComponent } from './med-services.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component:MedServicesComponent },
];

export const MedServiceRoutes: ModuleWithProviders = RouterModule.forChild(routes);
