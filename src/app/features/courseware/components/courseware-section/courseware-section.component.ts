import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courseware-section',
  templateUrl: './courseware-section.component.html',
  styleUrls: ['./courseware-section.component.css'],
})
export class CoursewareSectionComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('coursesContainer') coursesContainer!: ElementRef<HTMLDivElement>;
  private scrollPosition: number = 0;

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() buttonLabel: string = '';
  @Input() buttonClasses: string = '';
  @Input() firstUpdatedDate: string = '';
  @Input() lastUpdatedDate: string = '';
  @Input() isFetching: boolean = false;

  currentRoute: string = this.router.url;

  constructor(private router: Router) {}

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

  onSeeAll() {
    this.router.navigate(['/material-didatico', 'ver-todos']);
  }
}
