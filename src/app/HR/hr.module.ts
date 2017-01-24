import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HrportalComponent} from './hrportal.component';
import {RouterModule, Routes} from '@angular/router';
import {JobComponent} from './jobpost.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
const HR_ROUTES: Routes = [
    {
        path: 'hr', component: HrportalComponent,
        children:[
        {
            path:'',
            component: JobComponent
        }]
        
    }
];
@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(HR_ROUTES),
     FormsModule,ReactiveFormsModule

  ],
  declarations: [HrportalComponent,JobComponent]
})
export class HrModule { }
