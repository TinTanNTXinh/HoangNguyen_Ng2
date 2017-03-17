import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Subscription, Observable} from "rxjs";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {AuthenticationService} from "../authentication/authentication.service";
import {Router} from "@angular/router";

@Injectable()
export class HttpClientService {
    private _headers: Headers = new Headers();
    private _authSubscription: Subscription;

    public httpClient = new BehaviorSubject<Boolean>(false);
    public httpClient$ = this.httpClient.asObservable();

    private apiHost: string = '';
    private apiUrl: string = '';
    private apiVersion: string = '';

    constructor(private http: Http, private authenticationService: AuthenticationService, private router: Router) {
        this.apiHost = 'http://localhost:8000';
        this.apiUrl = 'api';
        this.apiVersion = 'v1';

        this._authSubscription = authenticationService.authenticate$.subscribe(
            status => {
                console.log("%c HttpClientService", "color: green");
                console.log(status);
                if (status) {
                    this.createHeader();
                    console.log("%c Tạo header", "color: green");
                    console.log("%c Role", "color: green");
                    console.log(authenticationService.authenticateRole);
                    console.log("%c User", "color: green");
                    console.log(authenticationService.authenticateUser);
                    this.get('authorization').subscribe(
                        (success: Response) => {
                            /* SAVE USER */
                            authenticationService.authenticateUser = success.json()['user'];

                            /* SAVE ROLE */
                            let array_role = success.json()['roles'];
                            authenticationService.authenticateRole = [];
                            for (let i = 0; i < array_role.length; i++) {
                                authenticationService.authenticateRole.push(array_role[i]);
                            }

                            /* SAVE AUTH */
                            authenticationService.createAuthLocalStorage();
                            // this.authenticationService.notifyAuthenticate(true);

                            this.notifyHttpClient(true);

                            console.log("%c Role", "color: green");
                            console.log(authenticationService.authenticateRole);
                            console.log("%c User", "color: green");
                            console.log(authenticationService.authenticateUser);

                            console.log("%c Current URL: " + router.url, "color: yellow; background: black");
                            console.log("%c -----------------", "color: green");
                            router.navigate([router.url]);
                        },
                        (error: Response) => {
                            authenticationService.clearAuthLocalStorage();
                            authenticationService.notifyAuthenticate(false);
                            this.notifyHttpClient(false);
                        }
                    )

                } else {
                    this.removeHeader();
                    this.notifyHttpClient(false);
                }
            }
        );
    }

    createHeader(): void {
        this._headers.delete('Authorization');
        this._headers.append('Authorization', 'Bearer ' + localStorage.getItem('_token'));
    }

    createHeaderFromToken(token: string): void {
        this._headers.delete('Authorization');
        this._headers.append('Authorization', 'Bearer ' + token);
    }

    removeHeader(): void {
        this._headers.delete('Authorization');
    }

    get(url: string): Observable<Response> {
        return this.http.get(`${this.apiHost}/${this.apiUrl}/${this.apiVersion}/${url}`, {
            headers: this._headers
        });
    }

    post(url: string, data: any): Observable<Response> {
        return this.http.post(`${this.apiHost}/${this.apiUrl}/${this.apiVersion}/${url}`, data, {
            headers: this._headers
        });
    }

    put(url: string, data: any): Observable<Response> {
        return this.http.put(`${this.apiHost}/${this.apiUrl}/${this.apiVersion}/${url}`, data, {
            headers: this._headers
        });
    }

    patch(url: string, data: any): Observable<Response> {
        return this.http.patch(`${this.apiHost}/${this.apiUrl}/${this.apiVersion}/${url}`, data, {
            headers: this._headers
        })
    }

    delete(url: string): Observable<Response> {
        return this.http.delete(`${this.apiHost}/${this.apiUrl}/${this.apiVersion}/${url}`, {
            headers: this._headers
        });
    }

    notifyHttpClient(status: Boolean): void {
        this.httpClient.next(status);
    }

    getDatasPage(url: string, page: number, pageSize: number) : Observable<Response> {
        return this.http.get(`${this.apiHost}/${this.apiUrl}/${this.apiVersion}/${url}/page/${page}/${pageSize}`, {
            headers: this._headers
        });
    }

}