import {Component, OnInit} from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

	loginForm : FormGroup;

	constructor(fb: FormBuilder){
		this.loginForm = fb.group({
		'loginEmail' : [null, Validators.required],
		'loginPassword': [null, Validators.required],
      	'rememberMe' : [false, Validators.required]
		});
	}

    ngOnInit() {
    }

    onLogin(){
  	let credentials = this.loginForm.value;
  	console.log(credentials);
  }

}
