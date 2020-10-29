import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { tap, catchError, retry } from 'rxjs/operators';

@Injectable({
   providedIn: 'root' 
})

export class ServerErrorsInterceptor implements HttpInterceptor {

    constructor(private snackBar: MatSnackBar, private router: Router ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     return next.handle(request).pipe(retry(environment.REINTENTOS))
    }

}
