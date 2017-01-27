import {Component, OnInit} from "@angular/core";
import {UserService} from "../shared/services/user.service";

@Component({
    selector: 'app-landing',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.populate();
    }

}
