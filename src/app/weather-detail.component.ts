import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component ({
    selector: 'weather-detail',
    templateUrl: './weather-detail.component.html',
    styleUrls: ['./app.component.css'],
})

export class WeatherDetailComponent implements OnInit {

    location = 'Springfield';
    pressure = 'Loading';
    humidity = 'Loading';
    visibilty = 'Loading';
    windSpeed = 'Loading';
    windDirection = 'Loading';

constructor(
    private route: ActivatedRoute){}

ngOnInit(){
    this.getWeatherDetail();
}

getWeatherDetail(){
    let url = 'http://api.openweathermap.org/data/2.5/weather?zip=65802' +
    '&appid=b86dc3179d853356b32565e7717caca5'+
    '&units=imperial';
    fetch(url)
    .then(function(response){
        return response.json();
    }).then(function(json){
        this.pressure = json.main.pressure;
        this.humidity = json.main.humidity;
        this.visibilty = json.visibility;
        this.windSpeed = json.wind.speed;
        this.windDirection = json.wind.deg + String.fromCharCode(176);
    }.bind(this));
}

}
