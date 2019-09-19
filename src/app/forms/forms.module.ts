import { FormsRoutes } from './forms.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';

@NgModule({
  imports: [
    CommonModule, FormsRoutes
  ],
  declarations: [FormsComponent]
})
export class FormsModule { }
