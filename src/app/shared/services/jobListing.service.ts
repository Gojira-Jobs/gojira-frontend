import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {ApiService} from "./api.service";
import {Job} from "../models/job";
import {ProfileService} from "../../profile/profile.service";
import {User} from "../models/user";

@Injectable()
export class JobListingService {
    constructor(private apiService: ApiService, private profileService: ProfileService) {
    }
user:User;
    getAll() {
        return this.apiService.get('/joblisting')
            .map(data => {
            console.log(data.jobs);
                return data.jobs;
            });
    }

    applyJob(job :Job) {
        this.profileService.getDetails().subscribe(data => {
          this.user = data;
      });
      //console.log(job);
      //console.log(this.user);
      let data ={
          "email":this.user.email,
          "job_id":job.job_id
      };
      //let body=JSON.stringify(data);
      console.log(data);
         this.apiService.post('/apply',data)
        .subscribe(res =>{
            console.log(res);
             alert("Applied Successfully");
        },
        err=>{
            console.log(err);
            alert("Already applied");
        });
    }
}
