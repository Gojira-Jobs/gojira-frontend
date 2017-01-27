import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../shared/services/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

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

        console.log(credentials);
        this.userService.login(credentials)
            .subscribe(data => {
                    this.router.navigateByUrl('/');
                },
                err => {
                    this.userService.purgeAuth();
                    this.error = err.msg;
                    this.isSubmitting = false;
                });
    }

}
