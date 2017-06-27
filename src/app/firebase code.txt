import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

import { AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import {firebaseConfig} from './app.module';

import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './weather.component.html',
  styleUrls: ['./app.component.css']
})
export class WeatherComponent {
  cityName = "Springfield";
  zip1;

  item: FirebaseObjectObservable<any>;
  constructor(db: AngularFireDatabase , private router: Router) {
      this.item = db.object('/user1/fav1', { preserveSnapshot: true });
  this.item.subscribe(snapshot => {
  console.log(snapshot.val())
  this.zip1 = snapshot.val();
  console.log(this.zip1);
});
  }

 }
