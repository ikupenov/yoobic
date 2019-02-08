import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'Movies',
      url: '/movies',
      icon: 'videocam'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navController: NavController
  ) {
    this.initializeApp();
  }

  onAvatarClick() {
    this.navController.navigateRoot(['authentication', 'sign-in']);
  }

  private async initializeApp() {
    await this.platform.ready();

    this.statusBar.styleDefault();
    this.splashScreen.hide();
  }
}
