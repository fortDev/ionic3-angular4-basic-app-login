import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthenticateProvider } from '../../providers/authenticate/authenticate';
import { HomePage } from '../home/home';

/**
 * Authenticate page.
 */
@Component({
    selector: 'page-authenticate',
    templateUrl: 'authenticate.html',
})
export class AuthenticatePage {
private user: any = {};
    /**
     * Constructor.
     * 
     * @param navCtrl Navigation controller.
     * @param navParams Navigation params.
     * @param authenticateProvider Authenticate provider.
     */
    constructor(public navCtrl: NavController, public navParams: NavParams, public authenticateProvider: AuthenticateProvider) {

    }

    /**
     * Call authenticator.
     */
    public login(): void {
        if (this.user.username && this.user.password) {
            this.authenticateProvider.authenticateUsingCredentials(this.user.username, this.user.password)
                    .subscribe(() => {
                        this.navCtrl.setRoot(HomePage);
                    });
        }
    }
}
