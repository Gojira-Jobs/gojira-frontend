import {BrowserModule} from "@angular/platform-browser";
import {NgModule, ModuleWithProviders} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./shared/layouts/header/header.component";
import {LandingModule} from "./landing/landing.module";
import {RouterModule} from "@angular/router";
import {FindjobModule} from "./findjob/findjob.module";
import {ProfileModule} from "./profile/profile.module";
import {AboutusModule} from "./aboutus/aboutus.module";
import {AuthModule} from "./auth/auth.module";
import {SharedModule} from "./shared/shared.module";
import {JwtService} from "./shared/services/jwt.service";
import {UserService} from "./shared/services/user.service";
import {ApiService} from "./shared/services/api.service";
import {JobListingService} from "./shared/services/jobListing.service";
import {HrModule} from "./HR/hr.module";
import {HrportalService} from "./shared/services/hrportal.service";



const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {});

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        LandingModule,
        FindjobModule,
        AboutusModule,
        ProfileModule,
        AuthModule,
        SharedModule,
        rootRouting,
        ReactiveFormsModule,
        HrModule
    ],
    providers: [JwtService, UserService, ApiService,HrportalService, JobListingService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
