import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';

@Injectable()
export class ProfileService {
details: User={
	"uid":1233,
	"name":"Prahllad Roy",
	"dob":new Date(1995/1/19),
	"email":"prahllad.x@venturepact.com",
	"mobile":"8974274851",
	"token": "string",
    "password": "string",
    "high_qual": "string",
    "high_qual_perc": 75,
    "pursuing_status": true,
    "gender": "Male",
    "resume": "string",
    "picture": "string",
	"address":
	{
		"line":"Durga Nagar",
		"city": "string",
    	"state": "string",
    	"pincode": "243006"
		}
};
getDetails()
{
  return this.details;
}

postDetails(user : User){
	console.log(user);
	this.details=user;
	
} 
}
