import {Component} from "@angular/core";
import {User} from "../shared/models/user";
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {UserService} from "../shared/services/user.service";
import {Errors} from "../shared/models/Error";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {

    errors: Errors = new Errors();
    isSubmitting: boolean = false;
    signupForm: FormGroup;

    constructor(fb: FormBuilder, private userService: UserService, private router: Router) {
        let password = new FormControl('', Validators.compose([Validators.required,
            Validators.minLength(6)]));
        let confirmPassword = new FormControl('', CustomValidators.equalTo(password));

        this.signupForm = fb.group({
            'name': [null, Validators.required],
            'email': [null, Validators.required],
            'password': password,
            'confirmPassword': confirmPassword,
            'acceptPolicy': [false, CustomValidators.equal(true)]
        });
    }

    user = new User;

    onSubmit(value: any) {
        this.user.name = value.name;
        this.user.email = value.email;
        this.user.password = value.password;

        this.errors = new Errors();
        this.isSubmitting = true;

        this.userService.register(this.user)
            .subscribe(data => {
                this.router.navigateByUrl('/');
            }, err => {
                //TODO error handling
                this.errors = err;
                this.isSubmitting = false;
            });
    }

}