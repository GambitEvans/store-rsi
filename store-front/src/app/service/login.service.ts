import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from '../model/response';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  api = environment.URL;
  private LOGIN = 'v1/login';
  private SING_UP = 'v1/singup';
  private userSubject: BehaviorSubject<Response>;
  currentUser: Observable<Response>;
  
  
  constructor(private http:HttpClient) { 
    this.userSubject = new BehaviorSubject<Response>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.userSubject.asObservable();
  }

  public get currentUserValue(): Response {
    return this.userSubject.value;
  }

  singIn(user:User) {
    return this.http.post<Response>(this.api.concat(this.LOGIN), user)
      .pipe(map(res => {
        console.log(res);
        if(res && res.data.token) {
          localStorage.setItem('currentUser', JSON.stringify(res));
          this.userSubject.next(res);
        }
        return res;
      }));
  }

  singUp(user:User) {
    return this.http.post<Response>(this.api.concat(this.SING_UP), user);
  }
}