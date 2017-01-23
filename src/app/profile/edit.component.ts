import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  constructor(private prf:ProfileService,private router:Router) {
   }
details:any [];
  ngOnInit() {
    this.details=this.prf.getDetails();
    
  }
  load()
{
  this.router.navigate(['profile']);
}
  
  

}
