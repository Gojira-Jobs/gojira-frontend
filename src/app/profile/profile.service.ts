import {Injectable} from "@angular/core";
import {User} from "../shared/models/user";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {UserService} from "../shared/services/user.service";
import {ApiService} from "../shared/services/api.service";

@Injectable()
export class ProfileService {
currentUser: User;


constructor( private userService : UserService, private apiService: ApiService){}

getDetails()
{
  this.userService.getCurrentUser()
            .subscribe(user => {
                console.log('user changed to ' + JSON.stringify(user));
                this.currentUser = user;
            console.log(this.currentUser);
            });
			return this.currentUser;
}

postDetails(user : User){
    console.log('Edited: ');
    console.log(user);
    this.apiService.put("/user",user)
        .map(data =>
        JSON.stringify(data)).subscribe(data=>
        {console.log('hello');
        this.currentUser=this.getDetails();
        }
        );

	
} 
}
