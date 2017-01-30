import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {UserService} from "../services/user.service";
import {NgForm} from "@angular/forms";
import {User} from "../models/user";

@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    loggedIn: Observable<boolean>;
    currentUser: User;
     loggedInHr : Observable<boolean>;
    
    constructor(private userService: UserService) {
    }

    ngOnInit() {
        
     this.loggedInHr=this.userService.isHrLoggedIn();
        
        this.loggedIn = this.userService.isLoggedIn();

        this.userService.getCurrentUser()
            .subscribe(user => {
                console.log('user changed to ' + JSON.stringify(user));
                this.currentUser = user
            });
    }
   
    
    logout() {
   
        this.userService.purgeAuth();
    }

}
