import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { User } from '../model/user';
import { RoutesAPI } from '../util/routes-api';
import { ErrorUtil } from '../util/ErrorUtil';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getByUsername(username: string): Observable<User[]> {
    const query: HttpParams = new HttpParams().set('username', username);
    const options = username ? { params: query } : {};

    return this.httpClient.get<User[]>(`${RoutesAPI.USERS}`, options).pipe(
      //map((users: User[])=>users[0]),
      catchError(ErrorUtil.handleError)
    );
  }

  save(user: User): Observable<User> {
    return this.httpClient.post<User>(
      `${RoutesAPI.USERS}`,
      user,
      this.httpOptions
    );
  }

  patch(user: User): Observable<User> {
    return this.httpClient.patch<User>(
      `${RoutesAPI.USERS}/${user.id}`,
      user,
      this.httpOptions
    );
  }

  update(user: User): Observable<User> {
    return this.httpClient.put<User>(
      `${RoutesAPI.USERS}/${user.id}`,
      user,
      this.httpOptions
    );
  }
}
