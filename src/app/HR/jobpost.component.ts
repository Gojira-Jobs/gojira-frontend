import {Component,OnInit} from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators,NgForm} from "@angular/forms";
import {Job} from '../shared/models/job';
import {HrportalService} from '../shared/services/hrportal.service';
@Component({

        selector:'app-jobpost',
        templateUrl:'./jobpost.html'
    }
)
export class JobComponent  {
    
/** user={
   username:'',
   email:'',
   password:''
 };*/
 obj:any;
 constructor(private postjob:HrportalService){}
 job = new Job();
  onSubmit(form :NgForm)
  {

    console.log(JSON.stringify(this.job));
    this.obj=this.postjob.JobPost(this.job);
    console.log(Object);
  }



}