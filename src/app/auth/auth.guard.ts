import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {UserService} from "../shared/services/user.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private userService: UserService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {
    return this.userService.isLoggedIn() ;
    
      
 }
}