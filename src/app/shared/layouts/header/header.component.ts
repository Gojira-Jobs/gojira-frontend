import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    loggedIn: Observable<boolean>;

    constructor(userService: UserService) {
        this.loggedIn = userService.isLoggedIn();
    }

    ngOnInit() {

    }

}
