import { Component, OnInit } from '@angular/core';
import {HrportalService} from '../shared/services/hrportal.service'
import {Router} from "@angular/router";
@Component({
  selector: 'app-hrportal',
  templateUrl: './hrportal.component.html'
})
export class HrportalComponent implements OnInit {
tmp:boolean;
  constructor(private hrportal: HrportalService,private router :Router) { }

  ngOnInit() {
    this.tmp=this.hrportal.get();
    if(this.tmp   == false)
    {
      this.router.navigateByUrl('login');


    }
  }

}
