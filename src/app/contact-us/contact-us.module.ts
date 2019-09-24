import { ContactUsRoutes } from './contact-us.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    CommonModule,
    ContactUsRoutes,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCS7p5nMmELpuIFsixbloMHKT1LfsUZhLk'
    })
  ],
  declarations: [ContactUsComponent]
})
export class ContactUsModule { }
