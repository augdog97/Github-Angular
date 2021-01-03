import {CanDeactivate} from '@angular/router'
import {LoginComponent} from './login/login.component'

/**
 * 1.Implemented the canDeactivate method and in it we check to see if the forms dirty property which indicates if any of its form controls have been filled in. If yes, pop up the confirmation box. Else let the navigation away continue. 
 */

 export class PreventUnsavedChanges  implements CanDeactivate<LoginComponent> {
    canDeactivate(component: LoginComponent): boolean {
        if(component.form.dirty) {
            return confirm('Are you sure?');
        } else {
            return true;
        }
        ;
    }
 }