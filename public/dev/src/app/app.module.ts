// Default
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

// My libraries
import {routing} from './app.routing';
import {AuthenticationService} from './services/authentication/authentication.service';
import {HttpClientService} from './services/httpClient/httpClient.service';
import {UtilitiesService} from './services/utilities/utilities.service';

// My share components
import {HeaderComponent} from './layout-components/header/header.component';
import {AsideComponent} from './layout-components/aside/aside.component';
import {FooterComponent} from './layout-components/footer/footer.component';
import {PageHeaderComponent} from './layout-components/page-header/page-header.component';
import {UserMenuComponent} from './layout-components/user-menu/user-menu.component';
import {LoginComponent} from './layout-components/login/login.component';
import {DashboardComponent} from './layout-components/dashboard/dashboard.component';

// Root component
import {AppComponent} from './app.component';

// My share modules
import { SharedModule }   from './shared.module';

@NgModule({
    declarations: [
        AppComponent,

        HeaderComponent,
        AsideComponent,
        FooterComponent,
        PageHeaderComponent,
        UserMenuComponent,
        LoginComponent,
        DashboardComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing,
        SharedModule
    ],
    providers: [
        AuthenticationService,
        HttpClientService,
        UtilitiesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
