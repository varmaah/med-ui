import { HomePageComponent } from './home-page.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component:HomePageComponent },
];

export const HomePageRoutes: ModuleWithProviders = RouterModule.forChild(routes);
