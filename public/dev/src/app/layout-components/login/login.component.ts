import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Response} from "@angular/http";
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {HttpClientService} from '../../services/httpClient/httpClient.service';
import {UtilitiesService} from '../../services/utilities/utilities.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    public user: any = {
        username: "",
        password: ""
    };

    /**
     *
     */
    constructor(private authenticationService: AuthenticationService, private httpClientService: HttpClientService, private router: Router, private utilitiesService: UtilitiesService) {

    }

    ngOnInit() {

    }

    public postAuthentication(): void {
        this.httpClientService.post('authentication', {"user": this.user}).subscribe(
            (success: Response) => {
                // /* SAVE TOKEN */
                this.authenticationService.authenticateToken = success.json()['token'];
                this.getAuthorization(this.authenticationService.authenticateToken);
            },
            (error: Response) => {
                this.utilitiesService.showToastr('error', error.json()['error']);
            }
        )
    }

    public getAuthorization(token: string): void {
        this.httpClientService.createHeaderFromToken(token);
        this.httpClientService.get('authorization').subscribe(
            (success: Response) => {
                /* SAVE USER */
                this.authenticationService.authenticateUser = success.json()['user'];

                /* SAVE ROLE */
                let array_role = success.json()['roles'];
                this.authenticationService.authenticateRole = [];
                for (let i = 0; i < array_role.length; i++) {
                    this.authenticationService.authenticateRole.push(array_role[i]);
                }

                console.log("%c LoginComponent", "color: purple");
                console.log("%c Role", "color: purple");
                console.log(this.authenticationService.authenticateRole);
                console.log("%c User", "color: purple");
                console.log(this.authenticationService.authenticateUser);
                console.log("%c --------------", "color: purple");

                /* SAVE AUTH */
                this.authenticationService.createAuthLocalStorage();
                this.authenticationService.notifyAuthenticate(true);
                this.router.navigate(['/dashboards']);
            },
            (error: Response) => {
                this.utilitiesService.showToastr('error', error.json()['error']);
            }
        );
    }
}
