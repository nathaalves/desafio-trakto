import { NgModule } from '@angular/core';

import { CoursewareRoutingModule } from './courseware-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CourseComponent } from './components/course/course.component';
import { CoursewareSectionComponent } from './components/courseware-section/courseware-section.component';
import { CoursewareComponent } from './courseware.component';
import { CoursewareHomeComponent } from './pages/courseware-home/courseware-home.component';
import { CoursewareSeeAllComponent } from './pages/courseware-see-all/courseware-see-all.component';
import { CoursewareService } from './courseware.service';

@NgModule({
  declarations: [
    CoursewareComponent,
    CourseComponent,
    CoursewareSectionComponent,
    CoursewareHomeComponent,
    CoursewareSeeAllComponent,
  ],
  imports: [SharedModule, CoursewareRoutingModule],
  exports: [],
  providers: [CoursewareService],
})
export class CoursewareModule {}
