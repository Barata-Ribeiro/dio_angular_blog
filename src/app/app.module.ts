// AppModule
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';
import { PagesModule } from './pages.module';
import { ImgLazyDirective } from './img-lazy.directive';

@NgModule({
  declarations: [AppComponent, ImgLazyDirective],
  imports: [BrowserModule, AppRoutingModule, SharedModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
