import { OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthenticateProvider } from '../../providers/authenticate/authenticate';
import { AuthenticatePage } from './authenticate';

/**
 * Superclass that must be extended by pages with login required.
 */
export class RequireAuthenticationPage implements OnInit {

    /**
     * Constructor.
     * 
     * @param navCtrl Navigation controller.
     * @param navParams Navigation params.
     * @param authenticateProvider Authenticate provider.
     */
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public authenticateProvider: AuthenticateProvider) {
        
    }

    /**
     * Logout user.
     */
    public logout(): any {
        this.authenticateProvider.clearAuthenticatedUser();
        this.navCtrl.setRoot(AuthenticatePage);
    }

    /**
     * Post-constructor.
     */
    ngOnInit(): void {
        // Check if user are logged in.
        if (this.authenticateProvider.getAuthenticatedUser() != null) {
            // Logged in!
            console.log('Call aa!');
        } else {
            // If the current page isn't AuthenticatePage, redirects to AuthenticatePage.
            if (this.navCtrl.getActive().component.name != AuthenticatePage.name) {
                this.navCtrl.setRoot(AuthenticatePage);
            }
        }
    }
    
}