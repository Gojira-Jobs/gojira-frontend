import {Component, OnInit} from "@angular/core";
import {ProfileService} from "./profile.service";
import {User} from "../shared/models/user";
import {UserService} from "../shared/services/user.service";
import { DateFormatter } from "gb-date-formatter";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-userdetails',
  template:`
  <span class="w3-right w3-opacity glyphicon glyphicon-pencil"><a [routerLink]="['edit']">Edit</a></span>
                <h4>Personal Details</h4><br>
                
                <hr class="w3-clear">
                <h6>Candidate Name : {{details?.name}} </h6>
                <h6>Date of Birth : {{details?.dob}} </h6>
                <h6>Gender : {{details.gender}} </h6> 
                <h6>Email Id : {{details.email}} </h6>
                <h6>Contact no : {{details.phonenumber}} </h6>
                <hr class="w3-clear">
  
  `
})
export class UserdetailsComponent implements OnInit {

    constructor(private profile: ProfileService, private userService: UserService, private datePipe: DatePipe) {
    }
     date: any;
    details: User;
    newDate: Date;
    year: any;
    month: any;
    dt: any;
    tmp: any;
  ngOnInit() {
    this.userService.populate();
    this.profile.getDetails().subscribe(data => {
    this.details = data;
    this.date=new Date(this.details.dob);
    this.year=this.date.getFullYear();
    this.month=this.date.getMonth()+1;
    this.dt=this.date.getDate();
    if (this.dt < 10) {
        this.dt = '0' + this.dt;
    }
    if (this.month < 10) {
        this.month = '0' + this.month;
    }
    this.details.dob=this.tmp=this.year+'-'+this.month+'-'+this.dt;
    });
  }
}
