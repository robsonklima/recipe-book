import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';

import { AuthService } from '../services/auth';

import { TabsPage } from './../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage = TabsPage;
  signinPage = SigninPage;
  signupPage = SignupPage;
  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private authService: AuthService) {
      firebase.initializeApp({
        apiKey: "AIzaSyCxJI8NQNuXvnFUSVPDjad3xhRFDohPNvc",
        authDomain: "ionic2-recipebook-da085.firebaseapp.com"
      });

      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.isAuthenticated = true;
          this.nav.setRoot(this.tabsPage);
        } else {
          this.isAuthenticated = false;
          this.nav.setRoot(this.signinPage);
        }
      });

      platform.ready().then(() => {
        statusBar.styleDefault();
        splashScreen.hide();
      });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout() {
    this.authService.logout();
    this.menuCtrl.close();
  }
}

