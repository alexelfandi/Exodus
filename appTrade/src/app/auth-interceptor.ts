import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router){}

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = localStorage.getItem("ACCESS_TOKEN");
        
        

        if (idToken) {
            const cloned = req.clone({
                
                
                headers: req.headers.set("Authorization",
                    "Bearer " + idToken)
            });
            return next.handle(cloned);
        }
        else {
            this.router.navigateByUrl("/inicioSesion");
            return next.handle(req);
        }
    }
}

