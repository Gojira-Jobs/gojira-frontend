import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from "./profile.component";
import { RouterModule, Routes } from '@angular/router';
import { UserdetailsComponent } from './userdetails.component';
import {EditComponent} from './edit.component';
import { ImageUploadModule } from 'ng2-imageupload';


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
         ImageUploadModule 
    ],
    declarations: [ProfileComponent, UserdetailsComponent,EditComponent]
})
export class ProfileModule {
}
