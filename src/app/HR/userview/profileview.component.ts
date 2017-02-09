import {Component,OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../shared/models/user";
import {ApiService} from "../../shared/services/api.service";
import {URLSearchParams} from "@angular/http";

@Component({
      templateUrl:'./profileview.html'
})
export class ProfileView implements OnInit
{
    applicantEmail: string;
    tmp: string="Welcome";
    details: User;
    constructor(private rout:ActivatedRoute,
                private apiService:ApiService){}
    ngOnInit()
    {
        
        $('#input-tags').selectize({
					persist: false,
					createOnBlur: true,
					create: true
				});
        console.log(this.rout.snapshot.params['id']);
        this.applicantEmail=this.rout.snapshot.params['id'];
        this.apiService.get('/userinfo', new URLSearchParams('email='+this.applicantEmail))
        .subscribe(data=>{
            console.log(data);
            this.details=data.user;
            var link = document.createElement('a');
        link.href = this.details.resume;
        link.download = this.details.email;
        document.getElementById("downRes").appendChild(link);
        link.click();
        });
    }

  /*  downloadResume(){
        var link = document.createElement('a');
        link.href = this.details.resume;
        link.download = this.details.email;
        document.getElementById("downRes").appendChild(link);
        //link.click();
    }
    */

}
