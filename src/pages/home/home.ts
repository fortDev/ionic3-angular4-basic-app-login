import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthenticateProvider } from '../../providers/authenticate/authenticate';
import { RequireAuthenticationPage } from '../authenticate/require-authentication';

/**
 * Home page extending require authentication page.
 */
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage extends RequireAuthenticationPage {
    /**
     * Constructor.
     * 
     * @param navCtrl Navigation controller.
     * @param navParams Navigation params.
     * @param authenticateProvider Authenticate provider.
     */
    constructor(public navCtrl: NavController, public navParams: NavParams, public authenticateProvider: AuthenticateProvider) {
        super(navCtrl, navParams, authenticateProvider);
    }
}
