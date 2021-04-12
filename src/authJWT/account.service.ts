import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { SERVER_API_URL } from './app.constants';
import { JhiTrackerService } from './tracker.service';
import { AccountDTO } from 'src/dto/account.dto';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userIdentity: any;
    private authenticated = false;
    private authenticationState = new Subject<any>();

    constructor(private http: HttpClient, private trackerService: JhiTrackerService) {
        if(localStorage.getItem('identity'))
            this.authenticate(localStorage.getItem('identity'));
        if(sessionStorage.getItem('identity'))
            this.authenticate(sessionStorage.getItem('identity'));
        
    }

    fetch(): Observable<HttpResponse<AccountDTO>> {
        return this.http.get<AccountDTO>(SERVER_API_URL + '/api/account', { observe: 'response' });
    }

    save(account: any): Observable<HttpResponse<any>> {
        return this.http.post(SERVER_API_URL + '/api/account', account, { observe: 'response' });
    }

    authenticate(identity) {
        if (identity) {
            this.userIdentity = identity;
            this.authenticated = true;
            this.trackerService.connect();
        } else {
            localStorage.clear();
            this.userIdentity = null;
            this.authenticated = false;
        }
        this.authenticationState.next(this.userIdentity);
    }

    hasAnyAuthority(authorities: string[]): boolean {
        if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {
            return false;
        }

        for (let i = 0; i < authorities.length; i++) {
            if (this.userIdentity.authorities.includes(authorities[i])) {
                return true;
            }
        }

        return false;
    }

    hasAuthority(authority: string): Promise<boolean> {
        if (!this.authenticated) {
            return Promise.resolve(false);
        }

        return this.identity().then(
            id => {
                return Promise.resolve(id.authorities && id.authorities.includes(authority));
            },
            () => {
                return Promise.resolve(false);
            }
        );
    }

    identity(force?: boolean): Promise<any> {
        
        if (force) {
            this.userIdentity = null;
        }

        // check and see if we have retrieved the userIdentity data from the server.
        // if we have, reuse it by immediately resolving
        if (this.userIdentity) {
            return Promise.resolve(this.userIdentity);
        }

        // retrieve the userIdentity data from the server, update the identity object, and then resolve.
        return new Promise((resolve, reject) => this.fetch()
            .toPromise()
            .then(response => {
                const account = response.body;

                if(localStorage.getItem('key'))
                    localStorage.setItem('identity',JSON.stringify(account));
                if(sessionStorage.getItem('key'))
                    sessionStorage.setItem('identity',JSON.stringify(account));
                    
                this.authenticate(account);
                return resolve(this.userIdentity);
            })
            .catch(err => {
                if (this.trackerService.stompClient && this.trackerService.stompClient.connected) {
                    this.trackerService.disconnect();
                }
                this.userIdentity = null;
                this.authenticated = false;
                this.authenticationState.next(this.userIdentity);
                return reject(null);
            }));
    }

    isAuthenticated(): boolean {
        return this.authenticated;
    }

    isIdentityResolved(): boolean {
        return this.userIdentity !== undefined;
    }

    getAuthenticationState(): Observable<any> {
        return this.authenticationState.asObservable();
    }

    getImageUrl(): string {
        return this.isIdentityResolved() ? this.userIdentity.imageUrl : null;
    }
}
