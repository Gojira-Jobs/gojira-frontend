import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service';
import {Router} from '@angular/router';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers:[ProfileService] 
})
export class ProfileComponent implements OnInit {

constructor(private profile: ProfileService) { }
 details: User;
  ngOnInit() {
    this.details=this.profile.getDetails();
  }
}
