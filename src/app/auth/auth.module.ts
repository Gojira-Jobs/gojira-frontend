import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

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
        authRouting,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule {
}
