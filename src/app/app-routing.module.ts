import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {WeatherComponent} from './weather.component';
import {WeatherDetailComponent} from './weather-detail.component';

const routes: Routes = [
    {path: '' , redirectTo: '/weather', pathMatch: 'full'},
    {path: 'weather', component: WeatherComponent},
    {path: 'weatherdetail', component: WeatherDetailComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
