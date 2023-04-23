import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public isFetching = false;
  public errorMessage: string | null = null;

  constructor(private authService: AuthService) {}

  onLoginRequest(credentials: { email: string; password: string }) {
    this.isFetching = true;
    this.authService.login(credentials).subscribe({
      next: () => {
        this.isFetching = false;
        console.log('Login efetuado com sucesso!');
      },
      error: (err) => {
        this.isFetching = false;
        this.errorMessage = err;
        setTimeout(() => (this.errorMessage = null), 3000);
      },
    });
  }
}
