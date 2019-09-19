import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  {path: 'home' , loadChildren: () => import('src/app/home-page/home-page.module').then(mod => mod.HomePageModule)},
  {path: 'contact-us' , loadChildren: () => import('src/app/contact-us/contact-us.module').then(mod => mod.ContactUsModule)},
  {path: 'med-services' , loadChildren: () => import('src/app/med-services/med-services.module').then(mod => mod.MedServicesModule)},
  {path: 'meet-dr' , loadChildren: () => import('src/app/meet-doctor/meet-doctor.module').then(mod => mod.MeetDoctorModule)},
  {path: 'doctor-team' , loadChildren: () => import('src/app/doctor-team/doctor-team.module').then(mod => mod.DoctorTeamModule)},
  {path: 'doctor-detail' , loadChildren: () => import('src/app/doctor-detail/doctor-detail.module').then(mod => mod.DoctorDetailModule)},
  {path: 'forms' , loadChildren: () => import('src/app/forms/forms.module').then(mod => mod.FormsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
