import {Component, OnInit} from "@angular/core";
import {URLSearchParams} from "@angular/http";
import {ApiService} from "../shared/services/api.service";
import {JobListingService} from "../shared/services/jobListing.service";
import {Job} from "../shared/models/job";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  constructor(private apiService: ApiService, private jobList: JobListingService, private route: Router){

  }

   appliedJobs: AppliedJob[]=[];
    appJob:Job[]=[];
    jobs: Job[] = [];
    job:Job[]=[];

ngOnInit(){
 if(!localStorage.getItem("email"))
 {
   this.route.navigateByUrl('/login');
 }
  this.jobList.getAll()
          .subscribe(jobs => {
              this.jobs = jobs;


              this.apiService.get('/applied', new URLSearchParams('email='+localStorage.getItem('email')))
        .subscribe(data=>{
            this.appliedJobs=data.jobs;
            this.jobs.forEach(element => {
             this.appliedJobs.forEach(el=>{
               if(element.job_id==el.job_id)
               this.job.push(element);
             });
             console.log(this.job);
        });
        });
          });
        
        

}
   
}



export class AppliedJob{
  _id:string;
  job_id:string;
}
