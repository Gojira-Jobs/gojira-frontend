import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../shared/services/api.service";
import {URLSearchParams} from "@angular/http";
import {Job} from "../../shared/models/job";
@Component({
  selector: 'app-postedjob',
    templateUrl: 'postedjob.component.html'
})
export class PostedjobComponent implements OnInit {
email:string;
postedjob:Job[];

  constructor(private getjob:ApiService) { }

  ngOnInit() {
if(!localStorage.getItem("hremail"))
{
  return 1;
}

this.getjob.get("/hr/postedJobs",new URLSearchParams('email='+localStorage.getItem('hremail')))
.subscribe(
 data=>{
    this.postedjob=data.docs
    
   },
 err=>{
   alert('having problem');

 }


);



  }

}
