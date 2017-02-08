import {Component, OnInit,Output,EventEmitter} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../shared/services/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    @Output() hr=new EventEmitter();
    loginForm: FormGroup;
    error: string;
    isSubmitting: boolean = false;

    constructor(fb: FormBuilder, private userService: UserService, private router: Router) {
        this.loginForm = fb.group({
            'email': [null, Validators.required],
            'password': [null, Validators.required],
            'rememberMe': [false, Validators.required],
            'isHr': [false, Validators.required]
        });
    }

    ngOnInit() {
    }

    onLogin() {
        let credentials = this.loginForm.value;
        this.isSubmitting = true;

       
        this.userService.login(credentials)
            .subscribe(data => {
                 if(data.isHr==true)
                {
                    console.log(data);
                    localStorage.setItem('hremail',data.data.email);
                    this.router.navigateByUrl('hr');
                 }
                
                else{
                 this.router.navigateByUrl('/');            
                }
                },
                err => {
                    this.userService.purgeAuth();
                    this.error = err.err;
                    this.isSubmitting = false;
                }); 
        
           }

}
