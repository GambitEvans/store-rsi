import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private loginService: LoginService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.loginService.currentUserValue;
        const logged = currentUser && currentUser.data.token;
        const api = request.url.startsWith(environment.URL);
        if (logged && api) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.data.token}`
                }
            })
        }

        return next.handle(request);
    }
}