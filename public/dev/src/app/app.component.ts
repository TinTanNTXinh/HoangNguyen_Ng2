import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './services/authentication/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  private authenticate: boolean = false;
  private _authSubscription: Subscription;

  constructor(private vRef: ViewContainerRef, private router: Router, private authenticationService: AuthenticationService) {
    this._authSubscription = this.authenticationService.authenticate$.subscribe(
      status => {
        console.log("%c AppComponent", "color: blue");
        console.log(status);
        console.log("%c ------------", "color: blue");
        this.authenticate = Boolean(status);
        if (!status) {
          router.navigate(['/login']);
        }
      }
    );

    router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          if (event.url == '/login') {
            if(this.authenticate){
              this.router.navigate(['/dashboards']);  
            }
          } else {
            if (!this.authenticate) {
              this.router.navigate(['/login']);
            }
          }
        }
        // NavigationEnd
        // NavigationCancel
        // NavigationError
        // RoutesRecognized
      }
    )
  }

  ngOnInit() {
  }

  public displayLayout(): boolean {
    if (this.router.url == '/login'){
      return false;
    }
    return true;
  }

    public setBodyClass(): string {
        if (this.router.url == '/login'){
            return 'login-container';
        }
        return 'xinh-xinh';
    }

}
