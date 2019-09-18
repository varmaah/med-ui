import { MedServicesComponent } from './med-services.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component:MedServicesComponent },
];

export const MedServiceRouteRoutes:ModuleWithProviders = RouterModule.forChild(routes);
