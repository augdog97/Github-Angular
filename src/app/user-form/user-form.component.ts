import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore'

import {User} from '../user'
import {Observable} from 'rxjs'
import { Title } from '@angular/platform-browser';

import {GitHubLoginService} from '../github-login.service'

/**
 * 1. Creating a model driven form.
 * 2. Important to initialize 'user' to be a blank User object. This is to avoid any null reference exception that might occur in the loading of the form; either when we add a new user or later when we reuse the form again to edit an existing user.
 * 3. Create our form using the FormBuilder object that has two controls, username and email (each being required).
 * 4. Created the submit button which will be used on form submition
 *  - We first check if there is an id, which means the form is in edit mode. if so, we call the update methode of afs.doc to update. Else, which means the form is in Add New User mode, we call add() afs.collection to add the new user object to firebase.  
 * 5. After adding the new user we navigate back to the list of users with this._router.navigate([]) 
 * 6. Imported ActivatedRoute and inject it in our constructor. This is used to retreive the parameter id passed in from User component.
 * 7. We retreive id from _route.params and if it is null, it means that we arrive at UserForm without a parameter and want to perform adding a new user. We thus set the title to New user.
 *  - If id is not null, it means that we want to edit the current user with that given id and therefore display the title Edit User. 
 *  - Then we retreive the user object with  this.userDoc = this.afs.doc('users/' + this.id);
      this.singleUser = this.userDoc.valueChanges();
      this.singleUser.subscribe((user) => {
        this.form.get('username').setValue(user.name);
        this.form.get('email').setValue(user.email);
    - We retreive a specific user document with afs.doc and assign it to userDoc of type AngularFirestoreDocument<User>.
    - We then call userDoc.valueChanges which returns an Observable which we assign to singleUser. 
    - We subscribe to singleUser which returns our requested user object in a call back. 
    - When we have our requested user object, we then assign the user values to the usrname and email form field values to populate our edit form. 
  8. We include the logged in user id and append it to the document location in ngOnInit. 
    - this.userDoc ... this._loginService.loggedInUser retreives the existing client document data to populate it in the form. 
    - In the submit method we similarly include the logged in user id to the client document to update an existing client document. 
    - The same applies when we add a client document by doing .doc in the else of the submit method. 
 */


@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  id;
  form: FormGroup;
  title: string;
    user = new User();

  userDoc: AngularFirestoreDocument<User>;
  singleUser: Observable<User>;

  constructor(fb: FormBuilder, private _router: Router, private _route: ActivatedRoute, private afs: AngularFirestore, private _loginService: GitHubLoginService) {
    this.form = fb.group({
      username:["", Validators.required],
      email:["", Validators.required]
    })
   }

  ngOnInit(): void {
    
    this._route.params.subscribe(params => {
      this.id = params["id"];
    });
    if(!this.id) {
      this.title = "New User"
    } else {
      this.title = "Edit User"
      this.userDoc = this.afs.doc('users/' + this._loginService.loggedInUser + "/clients/" + this.id);
      this.singleUser = this.userDoc.valueChanges();
      this.singleUser.subscribe((user) => {
        this.form.get('username').setValue(user.name);
        this.form.get('email').setValue(user.email);
      })
    }
  }
  submit() {
    if (this.id) {
      this.afs.doc('users/' + this._loginService.loggedInUser + "/clients/" + this.id).update({
        name: this.user.name,
        email: this.user.email
      });;
    }
    else {
      this.afs.collection('users')
      .doc(this._loginService.loggedInUser)
      .collection("clients")
      .add({
        name: this.user.name,
        email: this.user.email
      });
    }
    this._router.navigate(['']);
  }

}
