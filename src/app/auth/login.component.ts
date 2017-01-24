import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../shared/services/user.service";
import {Errors} from "../shared/models/Error";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    errors: Errors = new Errors();
    isSubmitting: boolean = false;

    constructor(fb: FormBuilder, private userService: UserService, private router: Router) {
        this.loginForm = fb.group({
            'email': [null, Validators.required],
            'password': [null, Validators.required],
            'rememberMe': [false, Validators.required]
        });
    }

    ngOnInit() {
    }

    onLogin() {
        let credentials = this.loginForm.value;
        this.errors = new Errors();
        this.isSubmitting = true;

        console.log(credentials);
        this.userService.login(credentials)
            .subscribe(data => {
                    this.router.navigateByUrl('/');
                },
                err => {
                    this.errors = err;
                    console.log('i am having issues ' + err);
                    this.isSubmitting = false;
                });
    }

}
