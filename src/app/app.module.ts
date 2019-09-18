import { AppFooterModule } from './app-footer/app-footer.module';
import { HeaderModule } from './header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollToTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    AppFooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
