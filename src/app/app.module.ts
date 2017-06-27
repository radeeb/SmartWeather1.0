import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule} from 'angularfire2';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent} from './weather.component';
import { WeatherDetailComponent} from './weather-detail.component';
import { WeatherService} from './weather.service';

export const firebaseConfig = {
    apiKey: "AIzaSyDN3cVFUdNOMSj1tzN2wOR9TdB-jwmueiA",
    authDomain: "enterpriseapp-95ec1.firebaseapp.com",
    databaseURL: "https://enterpriseapp-95ec1.firebaseio.com",
    projectId: "enterpriseapp-95ec1",
    storageBucket: "enterpriseapp-95ec1.appspot.com",
    messagingSenderId: "98225446014"
};

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
  ],
  providers: [WeatherService], //because you will need it in every view
  bootstrap: [AppComponent]
})
export class AppModule { }
