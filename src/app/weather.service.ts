import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {
    currentLocation = '65802';
    savedLocations = ['65802', '11377', '94016'];

    getSavedLocations(){
        return this.savedLocations;
    }

}
