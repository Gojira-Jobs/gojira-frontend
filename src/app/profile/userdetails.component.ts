import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service';
import { User } from '../shared/models/user';
@Component({
  selector: 'app-userdetails',
  template:`
  <span class="w3-right w3-opacity glyphicon glyphicon-pencil"><a [routerLink]="['edit']">Edit</a></span>
                <h4>Personal Details</h4><br>
                
                <hr class="w3-clear">
                <h6>Candidate Name : {{details.name}} </h6>
                <h6>Date of Birth : {{details.dob |  date: 'yyyy/MM/dd'}} </h6>
                <h6>Gender : {{details.gender}} </h6> 
                <h6>Email Id : {{details.email}} </h6>
                <h6>Contact no : {{details.mobile}} </h6>
                <hr class="w3-clear">
  
  `
  
})
export class UserdetailsComponent implements OnInit {

  constructor(private profile: ProfileService,) { }
  details: User;
  ngOnInit() {
    this.details=this.profile.getDetails();
  }

}
