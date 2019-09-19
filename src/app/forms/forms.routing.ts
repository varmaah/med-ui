import { ModuleWithProviders } from '@angular/core';
import { FormsComponent } from './forms.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component:FormsComponent },
];

export const FormsRoutes: ModuleWithProviders = RouterModule.forChild(routes);
