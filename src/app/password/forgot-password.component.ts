import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, Params} from "@angular/router";
import {JwtService} from "../shared/services/jwt.service";
import {UserService} from "../shared/services/user.service";
import {ApiService} from "../shared/services/api.service";
import { Subscription } from 'rxjs/Rx';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {PasswordService} from "./password.service";



@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {

  token: string;
  email: string;
  isHr: boolean;
  resetForm: FormGroup;
  error: string;
  isSubmitting: boolean = false;
  details: any;
  newPass: string;

  constructor(fb: FormBuilder,
              private route: Router,
              private userService: UserService,
              private ActRouter : ActivatedRoute,
              private jwtService: JwtService,
              private apiService: ApiService,
              private passwordService: PasswordService) {
              let password = new FormControl('', Validators.compose([Validators.required,
                  Validators.minLength(6)]));
              let confirmPassword = new FormControl('', CustomValidators.equalTo(password));
              this.resetForm = fb.group({
                'newPassword': password,
                'confirmPassword': confirmPassword
              });
                }

  ngOnInit() {

    this.ActRouter.queryParams.subscribe((params: Params)=>{
      this.token=params['token'];
      this.email=params['email'];
      this.isHr=params['H'];
      console.log(this.email);
      console.log(this.token);
      console.log(this.isHr);
      localStorage.setItem('email', this.email);
      this.jwtService.saveToken(this.token);
    });
  }

  onReset(){
    console.log(this.resetForm.value.newPassword);
    console.log(this.isHr);
    console.log(localStorage.getItem('email'));
    let obj={
      password:this.resetForm.value.newPassword,
      isHr:this.isHr,
      email: this.email
    }
    this.passwordService.resetPassword(obj)
                        .subscribe(data=>{
                          console.log(data);
                        },err=>{
                            console.log(err);
                        });
  }

}
