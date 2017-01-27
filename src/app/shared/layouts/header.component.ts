import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {UserService} from "../services/user.service";

@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    loggedIn: Observable<boolean>;

    constructor(private userService: UserService) {
        this.loggedIn = userService.isLoggedIn();
        this.loggedIn.subscribe((data => {
        }));
    }

    ngOnInit() {
    }

    logout() {
        console.log('logging out current user ');
        this.userService.purgeAuth();
    }

}
