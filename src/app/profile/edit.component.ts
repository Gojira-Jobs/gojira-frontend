import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../shared/models/user';
import { Input } from '@angular/core';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
	profileForm : FormGroup;
  details: User=<User>{};
  
  constructor(private prf:ProfileService, private router:Router, fb: FormBuilder) {
    this.prf.getDetails().subscribe(data=>{
      console.log("data from form");
      console.log(data);
      this.details=data;
    });
  	this.profileForm = fb.group({
	  'name' : [this.details.name, Validators.required],
	  'email' : [this.details.email, Validators.required],
    'pursuing' : [this.details.pursuing_status],
    'high_qual' : [this.details.high_qual, Validators.required],
    'dob' : [this.details.dob, Validators.required],
    'phonenumber' : [this.details.phonenumber, Validators.required],
    'high_qual_perc' : [this.details.high_qual_perc, Validators.required],
    'gender': [this.details.gender, Validators.required],
    'street' : [this.details.street, Validators.required],
    'city' : [this.details.city, Validators.required],
    'state' : [this.details.state, Validators.required],
    'pincode' : [this.details.pincode, Validators.required],
    'resume' : [],
    'picture' :  []
		});

   }

  ngOnInit() {
     this.prf.getDetails().subscribe(data=>{
      console.log("data from form");
      console.log(data);
      this.details=data;
     });
  }
  load()
  {
	  this.details = this.profileForm.value;
    this.prf.postDetails(this.details).
      subscribe(data=>{
        console.log("data from Update");
        console.log(data);
        this.details=data;
      });
  	this.router.navigate(['profile']);
  }
  
  

}
