import {Component,OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
@Component({
      templateUrl:'./profileview.html'
})
export class ProfileView implements OnInit
{
    
    constructor(private rout:ActivatedRoute)
    {

    }
    ngOnInit()
    {
        console.log(this.rout.snapshot.params['id']);
    }

}