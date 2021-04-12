import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { SERVER_API_URL } from './app.constants';
import { UserService } from 'src/service/user.service';

@Injectable({ providedIn: 'root' })
export class AuthServerProvider {

    constructor(private http: HttpClient, private userService: UserService ){}

    getToken() {
        return localStorage.getItem('key') || sessionStorage.getItem('key');
    }

    login(credentials): Observable<any> {
        const data = {
            username: credentials.username,
            password: credentials.password,
            rememberMe: credentials.rememberMe
        };
        
        return this.http.post<any>(SERVER_API_URL + '/api/authenticate', data, { observe: 'response' }).pipe(map(authenticateSuccess.bind(this)));

        function authenticateSuccess(resp) {
            
            const bearerToken = resp.headers.get('Authorization');
            console.log("bearerToken",bearerToken)
            if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
                const jwt = bearerToken.slice(7, bearerToken.length);
                
                this.storeAuthenticationToken(jwt, credentials.rememberMe);
                return jwt;

            }
        }
    }

    loginWithToken(jwt, rememberMe) {
        if (jwt) {
            this.storeAuthenticationToken(jwt, rememberMe);
            return Promise.resolve(jwt);
        } else {
            return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
        }
    }

    storeAuthenticationToken(jwt, rememberMe) {
        if (rememberMe) {
            localStorage.setItem('key', jwt);
        } else {
            sessionStorage.setItem('key', jwt);
        }
    }

    logout(): Observable<any> {
        return new Observable(observer => {
            localStorage.clear();
            sessionStorage.clear();
            observer.complete();
        });
    }
}
