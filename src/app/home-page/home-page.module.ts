import { HomePageRoutes } from './home-page.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutes
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
