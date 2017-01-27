import { Injectable,OnInit } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
@Injectable()
export class HrportalService implements OnInit {

  constructor(private http:Http) { }
 
 hrloggedIn :boolean=false;
 ngOnInit()
 {


 }
 get()
 {
   return this.hrloggedIn;

 }
 set(tmp: boolean)
 {
   this.hrloggedIn=tmp;

 }
 



}
