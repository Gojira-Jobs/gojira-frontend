import {Component,OnInit} from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators,NgForm} from "@angular/forms";
import {Job} from '../shared/models/job';

import {ApiService} from "../shared/services/api.service";
import {Router} from '@angular/router';
@Component({

        selector:'app-jobpost',
        templateUrl:'./jobpost.html'
    }
)
export class JobComponent implements OnInit  {
    
/** user={
   username:'',
   email:'',
   password:''
 };*/
 val:boolean=false;
 obj:any;
 constructor(private postjob:ApiService,private router:Router){}
 job = new Job();
ngOnInit()
{
  return 1;

}
  onSubmit()
  {
    
 console.log(JSON.stringify(this.job.Joining));
    this.postjob.post("/joblisting",this.job).subscribe(data=>{
        this.val= true},
      err=>{
        alert('having some issue! please try again');
      }  
      );
    

       
   
  }



}