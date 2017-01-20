import {Component, OnInit} from '@angular/core';
import {AboutusComponent} from "../../../aboutus/aboutus.component";

@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    loggedIn: boolean = false;

    constructor() {
    }

    ngOnInit() {
        this.loggedIn = true;
    }

}
