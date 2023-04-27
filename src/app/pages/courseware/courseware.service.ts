import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take, exhaustMap } from 'rxjs';
import { Courseware } from './courseware.model';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CoursewareService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  fetchData(filter?: { [key: string]: string }) {
    const query = filter ? `?${new URLSearchParams(filter).toString()}` : '';

    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.get(`https://api.trakto.io/document${query}`, {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });
      }),
      map((res: any) => {
        const courceware = [];
        for (let data of res.data) {
          courceware.push(
            new Courseware(
              data.id,
              data.title,
              data.thumbs.low,
              data.pages?.length ? data.pages.length : 1,
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
  }
}
