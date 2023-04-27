import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { ErroMessageComponent } from './shared/components/error-message/error-message.component';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeAnchorComponent } from './features/home/components/home-anchor/home-anchor.component';
import { CoursewareComponent } from './features/courseware/courseware.component';
import { CourseComponent } from './features/courseware/components/course/course.component';
import { CoursewareSectionComponent } from './features/courseware/components/courseware-section/courseware-section.component';
import { CoursewareHomeComponent } from './features/courseware/pages/courseware-home/courseware-home.component';
import { CoursewareSeeAllComponent } from './features/courseware/pages/courseware-see-all/courseware-see-all.component';

@NgModule({
  declarations: [
    AppComponent,
    ErroMessageComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    HomeAnchorComponent,
    CoursewareComponent,
    CourseComponent,
    CoursewareSectionComponent,
    CoursewareHomeComponent,
    CoursewareSeeAllComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
