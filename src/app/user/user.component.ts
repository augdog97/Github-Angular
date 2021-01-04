import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Router} from '@angular/router';
import { map, catchError } from 'rxjs/operators';

import {GitHubLoginService} from '../github-login.service';

/**
 * 1. Import AngularFirestore and AngularFirestoreCollection. AngularFirestoreCollection is to interact with either the collections which store documents or to retreive specific documents.
 * 2. We define a User interface  which helps us determine the structure of the data associated with our users collection
 * 3. In the class we define two properties, usersCol which is of type AngularFirestoreCollection of type User (the interface defined above) and "users" which contains the array of user objects returned. 
 * 4. We then get an instance of AngularFirestore from injecting it in our constructor.
 * 5. in ngOnInit, we bind usersCol to our AngularFirestore instance with the .collection method where we pass in the name of the collection (users)
 *  - We then bind users to usersCol.valueChanges() which provides us with an Observable. 
 * 6. Id is considered metadata so we use snapshotChanges instead of valueChanges.
 *  snapshotChanges() provide us with other metadata of the document like the id. We provide a callback to snapshotChanges which provides us with the payload which is the document itself and the id which firebase assigns by default to a document. 
 * 7. In the delete method we first show a confirmation box asking for confirmation to delete. If true we call the delete method of this.afs.
 *  - the doc() method allows us to get on single specific document from firebase.  We need to specift the location of the data in firebase as arguments to doc(). In this case the locaiton of the obejct is container in the "users" colleciton with document id. The user id is a unique key generated for us by firebase whenever we add a document to firebase. The whole idea is to use this unique key to retreive the object for deletion. 
 *  - Having specified the target object using doc() we call the delete() methode to remove it from firebase. 
 * 8. In the delete method similar to what we do in the user form, we retreive the loggedInUser from the Login Service to access the loggedInUser clients collection in ngOnInit. We do the sam,e to access the client document in delete().
 */

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usersCol: AngularFirestoreCollection<User>;
  users: any;

  constructor(private afs: AngularFirestore, private _router: Router, private _loginService: GitHubLoginService) { }

  ngOnInit(){
    this.usersCol = this.afs.collection('users/' + this._loginService.loggedInUser + '/clients');
    this.users = this.usersCol.snapshotChanges()
    .pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as User;
          const id = a.payload.doc.id;
          return {id, data};
        });
      })
    );
  }
  add() {
    this._router.navigate(['add'])
  }
  delete(userId, name) {
    if(confirm('Are you sure you want to delete this user?' + name + '?')) {
      this.afs.doc('users/' + this._loginService.loggedInUser + '/clients/' + userId).delete();
    }
  }
}
