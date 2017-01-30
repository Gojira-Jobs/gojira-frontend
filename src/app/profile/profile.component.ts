import {Component, OnInit} from "@angular/core";
import {ProfileService} from "./profile.service";
import {User} from "../shared/models/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers:[ProfileService] 
})
export class ProfileComponent implements OnInit {

    constructor(private profile: ProfileService) {
    }

    details: User;
  ngOnInit() {
      this.profile.getDetails().subscribe(user => {
          this.details = user;
          console.log(this.details);
      });
  }
}
