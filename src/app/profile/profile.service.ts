import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {
Details:any []=['Prahllad Roy',"05/30/1993",'prahllad.x@venturepact.com',8974274851];
getDetails()
{
  return this.Details;
  
} 
}
