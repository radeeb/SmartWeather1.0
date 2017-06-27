import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component ({
    selector: 'weather-detail',
    templateUrl: './weather-detail.component.html',
    styleUrls: ['./app.component.css'],
})

export class WeatherDetailComponent {

    location = 'springfield';
    zipCode = 65802;

constructor(
    private route: ActivatedRoute){}

}
