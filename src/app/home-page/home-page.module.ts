import { HomePageRoutes } from './home-page.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { WhyBestComponent } from './why-best/why-best.component';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutes
  ],
  declarations: [HomePageComponent, WhyBestComponent]
})
export class HomePageModule { }
