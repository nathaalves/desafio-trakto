import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/shared/guards/auth.guard';

import { CoursewareComponent } from './courseware.component';
import { CoursewareHomeComponent } from './pages/courseware-home/courseware-home.component';
import { CoursewareSeeAllComponent } from './pages/courseware-see-all/courseware-see-all.component';

const routes: Routes = [
  {
    path: '',
    component: CoursewareComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: CoursewareHomeComponent },
      { path: 'ver-todos', component: CoursewareSeeAllComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursewareRoutingModule {}
