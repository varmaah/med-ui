import { MedServiceRoutes } from './med-service.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedServicesComponent } from './med-services.component';

@NgModule({
  imports: [
    CommonModule, MedServiceRoutes
  ],
  declarations: [MedServicesComponent]
})
export class MedServicesModule { }
