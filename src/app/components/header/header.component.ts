import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public date: string;
  public profilePicture: string | undefined;

  constructor(private authService: AuthService) {
    const day =
      new Date().getDate() < 10
        ? `0${new Date().getDate()}`
        : new Date().getDate();
    const month =
      new Date().getMonth() < 10
        ? `0${new Date().getMonth()}`
        : new Date().getMonth();
    const year = new Date().getFullYear();
    this.date = `${day}/${month}/${year}`;

    this.authService.user.subscribe((user) => {
      if (user) {
        this.profilePicture = user.profilePicture;
      }
    });
  }
}
