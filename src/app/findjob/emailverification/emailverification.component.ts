import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {JwtService} from "../../shared/services/jwt.service";
import {ApiService} from "../../shared/services/api.service";
import {UserService} from "../../shared/services/user.service";
@Component({
  selector: 'app-emailverification',
  templateUrl: './emailverification.component.html'
})
export class EmailverificationComponent implements OnInit {
tmp:string;
sub:Subscription;
email:string;
token:string;
  constructor(private router:ActivatedRoute,private rout:Router,private jwt:JwtService,private api:ApiService,private userservice:UserService) {
   this.sub=router.queryParams.subscribe((queryparams:any)=>
         { 
           if(queryparams['email'] && !queryparams['token'])
           {
             this.email=queryparams['email'];
           }
           else if(queryparams['email'] && queryparams['token'] )
           {
           console.log(queryparams);
          this.email=queryparams['email'];
          this.token=queryparams['token'];
          this.jwt.saveToken(this.token);
          localStorage.setItem('email',this.email);
         this.api.post('/verified').subscribe((data)=>
         {
           /**this.userservice.setAuth(data);*/
           console.log(data);
           //this.rout.navigateByUrl('/profile');

         }
         )
           }     
        })

   }

  ngOnInit() {
    
  }

}
