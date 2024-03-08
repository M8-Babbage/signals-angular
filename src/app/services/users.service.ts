import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Data } from '@angular/router';
import { Observable, map } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
class UsersService {
  private _http: HttpClient = inject(HttpClient);
  private baseUrl = 'https://reqres.in/api/users';

  getUserById(id: number): Observable<Data> {
    return this._http
      .get<User>(`${this.baseUrl}/${id}`)
      .pipe(map<User, Data>((response) => response.data));
  }
}

export { UsersService };
