import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-anchor',
  templateUrl: './home-anchor.component.html',
  styleUrls: ['./home-anchor.component.css'],
})
export class HomeAnchorComponent {
  @Input() label: string = '';
  @Input() labelColor: string = '';
  @Input() image: string = '';
  @Input() borderColor: string = '';
  @Input() backgroundColor: string = '';
  @Input() link: string = '';
}
