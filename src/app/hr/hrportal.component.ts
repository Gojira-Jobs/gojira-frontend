import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
@Component({
  selector: 'app-hrportal',
  templateUrl: './hrportal.component.html'
})
export class HrportalComponent implements OnInit {
tmp:boolean;
  constructor(private router :Router) { }

  ngOnInit() {
    
    /**if(this.tmp   == false)
    {
      this.router.navigateByUrl('login');


    }*/
  }

}
