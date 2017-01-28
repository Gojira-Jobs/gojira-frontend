import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {UserService} from "../services/user.service";
import {User} from "../models/user";
import {Router} from "@angular/router";

@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    loggedIn: Observable<boolean>;
    currentUser: User;

    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit() {
        this.userService.populate();
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
