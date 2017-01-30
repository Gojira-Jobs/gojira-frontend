import { Component, OnInit } from '@angular/core';
import { Job } from '../shared/models/job';
import { JobListingService } from '../shared/services/jobListing.service';


//import {jobsList} from '.\app\findjob\jobs';
@Component({
  selector: 'app-findjob',
  moduleId:module.id,
  templateUrl: 'findjob.component.html',
  styleUrls: ['findjob.component.css'],
  providers:[JobListingService]
  
})
export class FindjobComponent implements OnInit {
job : Job[]=[];
listFilter:string;
public visible = false;
  private visibleAnimate = false;
  selectedJob: Job;

   constructor(private jobList : JobListingService) { }

  ngOnInit() {
    this.jobList.getAll()
    .subscribe(jobs=> {
      this.job=jobs;
    });
  }

apply(){
  this.jobList.applyJob();
}


  public show(job:Job): void {
    this.selectedJob=job;
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

/*search(){
console.log(this.listFilter);
}*/



}
