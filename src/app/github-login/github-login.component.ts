
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

import { PasswordValidator } from '../passwordValidator';
import { GitHubLoginService } from '../github-login.service';


/**
 * 1. We import ActivatedRoute and in ngOnInit, we retreive the invalidLoginMessage parameter in ngOnInit() if it is thrown by Login Service upon unsuccessful login as implemented ealier.
 */


@Component({
  selector: 'github-login',
  templateUrl: './github-login.component.html',
  styleUrls: ['./github-login.component.css']
})
export class GithubLoginComponent implements OnInit {

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

  login() {
    var result = this._loginService.login(this.form.controls['username'].value,
      this.form.controls['password'].value);

    if (!result) {
      this.form.controls['password'].setErrors({
        invalidLogin: true
      });
    }
  }

}
