import { Component } from '@angular/core';
import { User } from './user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-register',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
	signupForm : FormGroup;

	constructor(fb: FormBuilder){
    let password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]));
    let confirmPassword = new FormControl('', CustomValidators.equalTo(password));


		this.signupForm = fb.group({
			'name' : [null, Validators.required],
			'email' : [null, Validators.required],
			'password': password,
      'confirmPassword': confirmPassword,
      'acceptPolicy' : [false, CustomValidators.equal(true)]
		});
	}

  user = new User;

  onSubmit(value : any){
  	this.user.name = value.name;
  	this.user.email = value.email;
  	this.user.password = value.password;
  }
  
}