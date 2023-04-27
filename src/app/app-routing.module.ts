import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { CoursewareComponent } from './pages/courseware/courseware.component';
import { CoursewareHomeComponent } from './pages/courseware/pages/courseware-home/courseware-home.component';
import { CoursewareSeeAllComponent } from './pages/courseware/pages/courseware-see-all/courseware-see-all.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'material-didatico',
    component: CoursewareComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: CoursewareHomeComponent },
      { path: 'ver-todos', component: CoursewareSeeAllComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
