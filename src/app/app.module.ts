import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ErroMessageComponent } from './components/shared/error-message/error-message.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeAnchorComponent } from './pages/home/components/home-anchor/home-anchor.component';
import { CousewareComponent } from './pages/couseware/couseware.component';

@NgModule({
  declarations: [
    AppComponent,
    ErroMessageComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    HomeAnchorComponent,
    CousewareComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
