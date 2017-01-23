import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers:[ProfileService] 
})
export class ProfileComponent implements OnInit {

constructor(private router:Router) { }


  ngOnInit() {

  }

}
