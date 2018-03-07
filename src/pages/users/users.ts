import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserPage } from './user/user';
/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  onLoadUser(name: string) {
    this.navCtrl.push(UserPage, { userName: name}, {
      direction: 'forward', // or 'back'
      duration: 2000,
      easing: 'ease-out'
    });
  }

  ionViewCanEnter(): boolean | Promise<boolean> {
    console.log('ionViewCanEnter UsersPage');
    const rnd = Math.random();
    return rnd > 0.1;
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter UsersPage');
  }

  ionViewCanLeave(): boolean | Promise<void> {
    const promise = new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve();
      }, 1000);
    });
    return promise;
  }






}
