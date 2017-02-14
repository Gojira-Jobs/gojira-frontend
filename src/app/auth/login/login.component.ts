import {Component, OnInit,Output,EventEmitter} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../shared/services/user.service";
import {Router} from "@angular/router";
import {PasswordService} from "../../password/password.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    @Output() hr=new EventEmitter();
    loginForm: FormGroup;
    error: string;
    isSubmitting: boolean = false;
     public visible = false;
    private visibleAnimate = false;
    email:string;

    constructor(fb: FormBuilder, 
                private userService: UserService, 
                private router: Router, 
                private passwordService: PasswordService) {
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


 public show(): void {
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true,300);
    }

    public hide(): void {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
    }

    checkEmail(){
        //console.log(this.email);
        this.passwordService.forgotPass(this.email);
        
    }

}
