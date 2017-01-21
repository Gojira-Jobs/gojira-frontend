import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";
import {RegisterComponent} from "./register.component";

const authRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'register',
        component: RegisterComponent
    }
]);

@NgModule({
    imports: [
        CommonModule,
        authRouting
    ],
    declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule {
}
