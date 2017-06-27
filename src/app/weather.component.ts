import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import {firebaseConfig} from './app.module';
import { WeatherService} from './weather.service';
import { Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

@Injectable()
export class WeatherComponent implements OnInit {
  city = "Loading";
  temp = "Loading";
  conditions = "Loading";
  iconID; //to show the weather icon
  zip1;

  constructor(private dataService:WeatherService){}

  ngOnInit() {
      this.getWeatherInfo();

  }

  getWeatherInfo(){
      let url = 'http://api.openweathermap.org/data/2.5/weather?zip=' +
      this.dataService.currentLocation +
      '&appid=b86dc3179d853356b32565e7717caca5'+
      '&units=imperial';
      fetch(url)
      .then(function(response){
          return response.json();
      }).then(function(json){
          console.log(json);
          this.city = json.name;
          this.conditions = json.weather[0].description;
          //format the first letter to upper case
          this.conditions = this.conditions.charAt(0).toUpperCase() + this.conditions.slice(1);
          this.temp = json.main.temp;
          this.temp = this.toInteger(this.temp) + String.fromCharCode(176) + ' F'; //round and concat
          this.iconID = json.weather[0].icon;
      }.bind(this));
  }

  toInteger(number){
  return Math.round(Number(number));
}

}
