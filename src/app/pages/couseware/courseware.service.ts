import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  tap,
  throwError,
  take,
  exhaustMap,
} from 'rxjs';
import { Couseware } from './courseware.model';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CoursewareService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  fetchData() {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.get('https://api.trakto.io/document', {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });
      }),
      map((res: any) => {
        const courceware = [];
        for (let data of res.data) {
          courceware.push(
            new Couseware(
              data.id,
              data.title,
              data.thumbs.low,
              data.pages.length,
              data.updated_at
            )
          );
        }
        return {
          data: courceware,
          hasNextPage: res.hasNextPage,
          hasPreviousPage: res.hasPreviousPage,
        };
      })
    );

    // .pipe(
    //   catchError((err) => {
    //     return throwError(() => {
    //       if (err.status === 401) {
    //         return 'Verifique seu login.';
    //       }
    //       return 'Erro desconhecido, tente novamente mais tarde!';
    //     });
    //   }),
    //   tap((res: any) => {
    //     this.handleAuthentication(
    //       res.id,
    //       res.email,
    //       res.firstName,
    //       res.logo?.url.low.url,
    //       res.access_token
    //     );
    //   })
    // );
  }
}
