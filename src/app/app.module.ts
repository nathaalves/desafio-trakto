import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './features/login/login.module';
import { HomeModule } from './features/home/home.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ScrollService } from './shared/services/scroll.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoginModule,
    HomeModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private scrollService: ScrollService) {
    this.scrollService.setupScrollTopOnNavigation();
  }
}
