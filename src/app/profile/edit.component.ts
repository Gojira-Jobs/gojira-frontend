import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  constructor(private prf:ProfileService,private router:Router) { }
details:string[];
val:string;
  ngOnInit() {
    this.details=this.prf.getDetails();
    this.val="hello";
  }
  load()
{
  this.router.navigate(['']);

  }
  
  

}
