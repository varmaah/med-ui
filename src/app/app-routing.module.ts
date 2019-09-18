import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  {path: 'home' , loadChildren: () => import('src/app/home-page/home-page.module').then(mod => mod.HomePageModule)},
  {path: 'contact-us' , loadChildren: () => import('src/app/contact-us/contact-us.module').then(mod => mod.ContactUsModule)},
  {path: 'med-services' , loadChildren: () => import('src/app/med-services/med-services.module').then(mod => mod.MedServicesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
