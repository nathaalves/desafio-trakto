import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CoursewareService } from './courseware.service';
import { Courseware } from './courseware.model';
import { formatedDate } from 'src/utils/formatedDate';

@Component({
  selector: 'app-couseware',
  templateUrl: './courseware.component.html',
  styleUrls: ['./courseware.component.css'],
})
export class CoursewareComponent implements OnInit {
  courseware: Courseware[] = [];
  hasNextPage = false;
  hasPreviousPage = false;
  firstUpdatedDate = '';
  lastUpdatedDate = '';

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('coursesContainer') coursesContainer!: ElementRef<HTMLDivElement>;
  scrollPosition = 0;

  constructor(private coursewareService: CoursewareService) {}

  ngOnInit(): void {
    this.getCourseware();
  }

  scrollLeft() {
    const scrollContainerWidth = this.scrollContainer.nativeElement.offsetWidth;
    this.scrollPosition -= scrollContainerWidth;
    this.scrollContainer.nativeElement.scrollTo({
      left: this.scrollPosition,
    });

    if (this.scrollPosition < 0) {
      this.scrollPosition = 0;
    }
  }

  scrollRight() {
    const coursesContainerWidth =
      this.coursesContainer.nativeElement.offsetWidth;
    const scrollContainerWidth = this.scrollContainer.nativeElement.offsetWidth;
    this.scrollPosition += scrollContainerWidth;
    this.scrollContainer.nativeElement.scrollTo({
      left: this.scrollPosition,
    });

    if (this.scrollPosition > coursesContainerWidth) {
      this.scrollPosition = coursesContainerWidth;
    }
  }

  private getCourseware() {
    this.coursewareService.fetchData().subscribe((res) => {
      this.courseware.push(...res.data);
      this.hasNextPage = res.hasNextPage;
      this.hasPreviousPage = res.hasPreviousPage;

      this.firstUpdatedDate = formatedDate(res.data[0].updatedAt).substring(
        0,
        5
      );
      this.lastUpdatedDate = formatedDate(
        res.data[res.data.length - 1].updatedAt
      ).substring(0, 5);
    });
  }
}
