import { ModuleWithProviders } from '@angular/core';
import { ContactUsComponent } from './contact-us.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component:ContactUsComponent },
];

export const ContactUsRoutes: ModuleWithProviders = RouterModule.forChild(routes);
