import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {UserService} from "../services/user.service";
import {NgForm} from "@angular/forms";
import {User} from "../models/user";
import {Router} from "@angular/router";
import {ApiService} from "../services/api.service";

@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    loggedIn: Observable<boolean>;
    currentUser: User;
     loggedInHr : Observable<boolean>;
    
    constructor(private userService: UserService,private router:Router,private api:ApiService) {
    }

    ngOnInit() {
        if(!localStorage.getItem("hremail")){
            this.userService.populate();
        }
        this.loggedInHr=this.userService.isHrLoggedIn();/**.subscribe(data=>console.log('hellopapa'+data));*/
        this.loggedIn = this.userService.isLoggedIn();
        this.userService.getCurrentUser()
            .subscribe(user => {
                this.currentUser = user
            });
    }


    logout() {
     if(localStorage.getItem('hremail'))
     {      
        this.api.post("/admin/auth/signout").subscribe(data=>console.log(data));
     }
        else if(localStorage.getItem('email'))
        {
            this.api.post("/user/auth/signout").subscribe(data=>console.log(data));

        }
        this.userService.purgeAuth();
        this.router.navigateByUrl('login');
        localStorage.clear();

    }
}
