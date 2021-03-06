import { Injectable } from '@angular/core';

import { AccountService } from './account.service';
import { AuthServerProvider } from './auth-jwt.service';
import { JhiTrackerService } from './tracker.service';

@Injectable({ providedIn: 'root' })
export class LoginService {
    constructor(
        private accountService: AccountService,
        private trackerService: JhiTrackerService,
        private authServerProvider: AuthServerProvider
    ) {}

    login(credentials) {

        return new Promise((resolve, reject) => {
            this.authServerProvider.login(credentials).subscribe(
                data => {
                        this.accountService.identity(true).then(account => {
                            this.trackerService.sendActivity();
                            return resolve(data);
                        });
                        },
                err => {
                    this.logout();
                    return reject(err);
                }
            );
        });
    }

    loginWithToken(jwt, rememberMe) {
        return this.authServerProvider.loginWithToken(jwt, rememberMe);
    }

    logout() {
        this.authServerProvider.logout().subscribe();
        this.accountService.authenticate(null);
    }
}
