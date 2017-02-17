import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FindjobComponent} from "./findjob.component";
import {FormsModule} from "@angular/forms";
import { EmailverificationComponent } from './emailverification/emailverification.component';

const findjobRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'findjob',
        component: FindjobComponent
    },
    {
      path:'verifyemail',
      component:EmailverificationComponent   
    }
]);

@NgModule({
    imports: [
        CommonModule,
        findjobRouting,
        FormsModule
    ],
    declarations: [FindjobComponent, EmailverificationComponent]
})
export class FindjobModule {
}