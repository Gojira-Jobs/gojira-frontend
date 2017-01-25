import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
@Injectable()
export class HrportalService {

  constructor(private http:Http) { }

  JobPost(details:any)
  {
    const body=JSON.stringify(details);
   const  headers=new Headers();
   headers.append("content-type","application/json");
 console.log("dat recived in service"+details);
    return this.http.post("http://localhost:3000/jobpost",body,{headers:headers}).map((response:Response)=>response.json());

  
  }

}
