import {OnInit,Component} from '@angular/core';
import {WeatherService} from './weather.service';

//this component could be called a rout component
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
            //to tell the browser where to display the component
//routerLink to tell the router where to navigate when the user clicks the link
})

export class AppComponent implements OnInit {

    title = 'SmartWeather';
    displayName = "Radeeb";
    zipCodes;

    constructor(private dataService: WeatherService){}

    ngOnInit(){
    this.zipCodes = this.dataService.getSavedLocations();
    }

    hello(){
        console.log("Hello");
    }
}
