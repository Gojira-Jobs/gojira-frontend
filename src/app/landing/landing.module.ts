import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {LandingComponent} from "./landing.component";

const landingRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: LandingComponent
    }
]);

@NgModule({
    imports: [
        landingRouting,
        CommonModule
    ],
    declarations: [LandingComponent]
})
export class LandingModule {
}
