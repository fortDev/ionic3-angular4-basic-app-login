import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http'

import { MyApp } from './app.component';
import { AuthenticatePage } from '../pages/authenticate/authenticate';
import { HomePage } from '../pages/home/home';
import { AuthenticateProvider } from '../providers/authenticate/authenticate';

/**
 * Application module.
 */
@NgModule({
    declarations: [
        MyApp,
        AuthenticatePage,
        HomePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AuthenticatePage,
        HomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AuthenticateProvider
    ]
})
export class AppModule {}
