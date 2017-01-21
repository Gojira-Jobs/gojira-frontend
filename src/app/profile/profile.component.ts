import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers:[ProfileService] 
})
export class ProfileComponent implements OnInit {

constructor(private profile: ProfileService) { }
details:string[];
  ngOnInit() {
this.details=this.profile.getDetails();
  }

}
