import {Component} from '@angular/core';

//this component could be called a rout component
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
            //to tell the browser where to display the component
//routerLink to tell the router where to navigate when the user clicks the link
})

export class AppComponent{
    title = 'SmartWeather';
    displayName = "Radeeb";
    zipCodes = ['65802','11377','94016'];
}
