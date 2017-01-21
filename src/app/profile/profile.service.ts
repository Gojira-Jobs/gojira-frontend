import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {
Details:string[]=['Prahllad Roy','30/5/1993','Male','prahllad.x@venturepact.com','8974274851'];
getDetails()
{
  return this.Details;
  
} 
}
