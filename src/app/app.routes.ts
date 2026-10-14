import { Routes } from '@angular/router';
import {Home} from "./shared/presentation/view/home/home";
import {PageNotFound} from "./shared/presentation/view/page-not-found/page-not-found";
import {chargingRoutes} from "./stations/presentation/charging.routes";


export const routes: Routes = [
    { path: 'home', component: Home},
    { path: '',redirectTo: 'home', pathMatch: 'full' },
    { path: 'charges', children: chargingRoutes},
    { path: '**', component: PageNotFound }
];
