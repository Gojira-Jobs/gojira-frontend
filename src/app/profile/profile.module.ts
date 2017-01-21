import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from "./profile.component";
import { RouterModule, Routes } from '@angular/router';


import { EditComponent } from './edit/edit.component';



const APP_ROUTES:Routes=[
    {path:'profile',component:ProfileComponent},
{path:'./profile/edit', component:EditComponent},
];

@NgModule({
    imports: [
        CommonModule,
         RouterModule.forRoot(APP_ROUTES)
    ],
    declarations: [ProfileComponent, EditComponent]
})
export class ProfileModule {
}
