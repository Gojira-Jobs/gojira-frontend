import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProfileComponent} from "./profile.component";

const profileRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'profile',
        component: ProfileComponent
    }
]);

@NgModule({
    imports: [
        CommonModule,
        profileRouting
    ],
    declarations: [ProfileComponent]
})
export class ProfileModule {
}
