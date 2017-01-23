import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service';
@Component({
  selector: 'app-userdetails',
  template:`
  <span class="w3-right w3-opacity glyphicon glyphicon-pencil"><a [routerLink]="['edit']">Edit</a></span>
                <h4>Personal Details</h4><br>
                
                <hr class="w3-clear">
                <h6>Candidate Name : {{details[0]}} </h6>
                <h6>Date of Birth : {{details[1]}} </h6>
                <h6>Gender : {{details[2]}} </h6> 
                <h6>Email Id : {{details[3]}} </h6>
                <h6>Contact no : {{details[4]}} </h6>
                <hr class="w3-clear">
  
  `
  
})
export class UserdetailsComponent implements OnInit {

  constructor(private profile: ProfileService,) { }
details:string[];
  ngOnInit() {
    this.details=this.profile.getDetails();
  }

}
