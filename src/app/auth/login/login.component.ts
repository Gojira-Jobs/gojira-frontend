import {Component, OnInit,Output,EventEmitter} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../shared/services/user.service";
import {Router} from "@angular/router";
import {PasswordService} from "../../password/password.service";
declare var $;
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
        $("input").focus(function(){
    $(this).css("background-color", "#e5f7ff");
});

$("input").blur(function(){
    $(this).css("background-color", "#ffffff");
});

$("button").hover(function(){
$(this).css("background-color", "#8421d1");
    }, function(){
    $(this).css("background-color", "#2164d1");
});

	 $('#select-tools').selectize({
					maxItems: null,
					valueField: 'id',
					labelField: 'title',
					searchField: 'title',
					options: [
						{id: 1, title: 'Cricket'},
						{id: 2, title: 'Reading Nobel'},
						{id: 3, title: 'Adventure'},
                        {id: 4, title: 'Cricket'},
						{id: 5, title: 'Reading Nobel'},
						{id: 6, title: 'Adventure'}
					],
					create: false
				});

    
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
