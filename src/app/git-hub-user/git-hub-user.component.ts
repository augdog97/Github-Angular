import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

/**
 * 1. Use Dependency Injection to get an instance of ActivatedRoute. ActivatedRoute contains route information of a component and we subscribe to its params method to get our route parameters.
 * 2. Implmemted the ngOnInit method and in it subscribe to _route.params which returns an Observable.
 *  - When then get the value of the parameters using: 'this.login = params['login] this.score = params['score]
 * 3. Implemented OnDestroy so that the subscription object is removed from memory when this component instance is destroyed.
 */

@Component({
  selector: 'user',
  templateUrl: './git-hub-user.component.html',
  styleUrls: ['./git-hub-user.component.css']
})
export class GitHubUserComponent implements OnInit, OnDestroy {
  login; 
  score;
  subscription;
  constructor(private _route: ActivatedRoute) {

   }

  ngOnInit() {
    this.subscription = this._route.params.subscribe(params => {
      this.login = params['login'];
      this.score = params['score'];
    })
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
}
