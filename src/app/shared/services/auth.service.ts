import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from '../../models/user.model';
import jwt_decode from 'jwt-decode';

interface TokenPayload {
  current_profile: {
    product: {
      id: string;
    };
    current_locale: string;
  };
  profiles: [
    {
      product: {
        id: string;
      };
    }
  ];
  sub: string;
  role: string;
  context: string;
  iat: number;
  exp: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  private handleAuthentication(
    id: string,
    email: string,
    firstName: string,
    profilePicture: string,
    token: string
  ) {
    const tokenPayload: TokenPayload = jwt_decode(token);
    const tokenExpirationDate = new Date(tokenPayload.exp * 1000);
    const user = new User(
      id,
      email,
      firstName,
      profilePicture,
      token,
      tokenExpirationDate
    );
    this.user.next(user);
  }

  login(credentials: { email: string; password: string }) {
    return this.http
      .post('https://api.trakto.io/auth/signin', credentials)
      .pipe(
        catchError((err) => {
          return throwError(() => {
            if (err.status === 401) {
              return 'Verifique seu login.';
            }
            return 'Erro desconhecido, tente novamente mais tarde!';
          });
        }),
        tap((res: any) => {
          this.handleAuthentication(
            res.id,
            res.email,
            res.firstName,
            res.logo?.url.low.url,
            res.access_token
          );
        })
      );
  }
}
