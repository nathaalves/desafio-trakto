import { Component, OnInit } from '@angular/core';
import { Courseware } from '../../courseware.model';
import { CoursewareService } from '../../courseware.service';

@Component({
  selector: 'app-courseware-see-all',
  templateUrl: './courseware-see-all.component.html',
  styleUrls: ['./courseware-see-all.component.css'],
})
export class CoursewareSeeAllComponent implements OnInit {
  courseware: Courseware[] = [];

  constructor(private coursewareService: CoursewareService) {}

  ngOnInit(): void {
    this.getCourseware();
  }

  private getCourseware() {
    this.coursewareService.fetchData().subscribe((res) => {
      this.courseware.push(...res.data);
    });
  }
}
