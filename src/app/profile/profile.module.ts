import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from "./profile.component";
import { RouterModule, Routes } from '@angular/router';
import { UserdetailsComponent } from './userdetails.component';
import {EditComponent} from './edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProfileService} from './profile.service';
import {UserService} from '../shared/services/user.service';



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
    declarations: [ProfileComponent, UserdetailsComponent,EditComponent],
    providers:[ProfileService, UserService]
})
export class ProfileModule {
}
