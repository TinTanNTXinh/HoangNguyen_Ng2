import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthenticationService {

    public authenticate = new BehaviorSubject<Boolean>(false);
    public authenticate$ = this.authenticate.asObservable();
    public authenticateRole: any = [];
    public authenticateUser: any = null;
    public authenticateToken: string;

    constructor() {
        this.checkAuthLocalStorage();
    }

    checkAuthLocalStorage(): void {
        try {
            console.log("%c AuthenticationService", "color: red");
            if (localStorage.getItem('_token')) {
                console.log("%c Đã có token trong localStorage", "color:red");
                /* GET AUTH FROM LOCAL STORAGE */
                this.getAuthLocalStorage();
                /* NOTIFY */
                this.notifyAuthenticate(true);
            } else {
                console.log("%c Không có token trong localStorage", "color:red");
                this.clearAuthLocalStorage();
                /* NOTIFY */
                this.notifyAuthenticate(false);
            }
            console.log("%c ------------------------------", "color:red");
        } catch (exception) {
            /* CLEAR AUTH IN LOCAL STORAGE */
            this.clearAuthLocalStorage();
            /* NOTIFY */
            this.notifyAuthenticate(false);
        }
    }

    getAuthLocalStorage(): void {
        /* GET TOKEN */
        this.authenticateToken = localStorage.getItem('_token');
    }

    createAuthLocalStorage(): void {
        /* CLEAR LOCAL STORAGE */
        this.clearAuthLocalStorage();
        /* CREATE TOKEN */
        localStorage.setItem('_token', this.authenticateToken);
    }

    clearAuthLocalStorage(): void {
        /* REMOVE TOKEN */
        localStorage.removeItem('_token');
    }

    notifyAuthenticate(status: Boolean): void {
        this.authenticate.next(status);
    }

}