import { Doctor2DetailComponent } from './doctor2-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component:Doctor2DetailComponent },
];

export const Doctor2DetailRoutes = RouterModule.forChild(routes);
