import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from "./profile.component";
import { RouterModule, Routes } from '@angular/router';
import { UserdetailsComponent } from './userdetails.component';
import {EditComponent} from './edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProfilepicComponent } from './profilepic/profilepic.component';




const APP_ROUTES:Routes=[
    {path:'profile',component:ProfileComponent,
    children:[
        {
            path:'',
            component:UserdetailsComponent
        },
        {
            path:'edit',
            component:EditComponent
        },
        {
            path:'profilepic',
            component:ProfilepicComponent
        }
    ]
   

}
];

@NgModule({
    imports: [
        CommonModule,
         RouterModule.forRoot(APP_ROUTES),
         FormsModule,
         ReactiveFormsModule
    ],
    declarations: [ProfileComponent, UserdetailsComponent,EditComponent, ProfilepicComponent]
})
export class ProfileModule {
}
