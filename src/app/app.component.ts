import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//noinspection TypeScriptCheckImport
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    const firebaseConfig = {
      apiKey: "AIzaSyBV-SJdkxr3uvJ9sVHssR8H0zE0aV3EoNI",
      authDomain: "scms-acb9d.firebaseapp.com",
      databaseURL: "https://scms-acb9d.firebaseio.com",
      projectId: "scms-acb9d",
      storageBucket: "scms-acb9d.appspot.com",
      messagingSenderId: "666733839277"
    };
    firebase.initializeApp(firebaseConfig);

    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
      if (user){
        this.rootPage = HomePage;
        unsubscribe();
      } else {
        this.rootPage = 'LoginPage';
        unsubscribe();
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

