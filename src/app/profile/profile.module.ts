import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from "./profile.component";
import { RouterModule, Routes } from '@angular/router';




const APP_ROUTES:Routes=[
    {path:'profile',component:ProfileComponent},
];

@NgModule({
    imports: [
        CommonModule,
         RouterModule.forRoot(APP_ROUTES)
    ],
    declarations: [ProfileComponent]
})
export class ProfileModule {
}
