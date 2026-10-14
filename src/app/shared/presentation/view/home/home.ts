import {Component} from "@angular/core";
import {ChargingStationsList} from "../../../../stations/presentation/charging-stations-list/charging-stations-list";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
    selector: 'app-home',
    templateUrl: 'home.html',
    styleUrl: 'home.css',
    imports: [ChargingStationsList, TranslatePipe]
})
export class Home{}