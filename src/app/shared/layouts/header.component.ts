import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {UserService} from "../services/user.service";
import {NgForm} from "@angular/forms";
import {User} from "../models/user";
import {Router} from "@angular/router";

@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    loggedIn: Observable<boolean>;
    currentUser: User;
     loggedInHr : Observable<boolean>;
    
    constructor(private userService: UserService,private router:Router) {
    }

    ngOnInit() {
        this.userService.populate();
 this.loggedInHr=this.userService.isHrLoggedIn();
      
        this.loggedIn = this.userService.isLoggedIn();

        this.userService.getCurrentUser()
            .subscribe(user => {
                this.currentUser = user
            });
    }
   
    
    logout() {
   
        this.userService.purgeAuth();
        this.router.navigateByUrl('login');
        localStorage.clear();
    }
}
