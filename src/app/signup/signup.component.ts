
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PasswordValidator } from '../passwordValidator';
import { GitHubLoginService } from '../github-login.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  invalidLoginMessage;

  constructor(fb: FormBuilder, private _loginService: GitHubLoginService, private _route: ActivatedRoute) {

    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required,
      PasswordValidator.cannotContainSpace])]
    })
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.invalidLoginMessage = params["invalidLoginMessage"];
    });
  }

  onSignup() {
    var result = this._loginService.signup(this.form.controls['username'].value, this.form.controls['password'].value);
  }

}
