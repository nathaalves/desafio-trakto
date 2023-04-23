import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public isFetching = false;
  public errorMessage: string | null = null;

  onLoginRequest(credentials: { email: string; password: string }) {
    this.isFetching = true;
  }
}
