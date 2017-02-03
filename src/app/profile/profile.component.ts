import {Component, OnInit} from "@angular/core";

import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  constructor( private route: Router){

  }

   
ngOnInit(){
 if(!localStorage.getItem("email"))
 {
   this.route.navigateByUrl('/login');
 }
  
        
        

}
   
}




