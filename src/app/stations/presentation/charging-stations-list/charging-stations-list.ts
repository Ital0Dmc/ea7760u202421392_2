import {Component, inject, Signal} from "@angular/core";
import {ChargingStations} from "../../domain/model/charging-stations.entity";
import {ChargingStationsApp} from "../../application/charging-stations-app";
import {MatGridListModule} from "@angular/material/grid-list";
import {TranslatePipe} from "@ngx-translate/core";
import {ChargingStationsSummary} from "../charging-stations-summary/charging-stations-summary";




@Component({
    selector: 'app-charging-stations-list',
    templateUrl: 'charging-stations-list.html',
    styleUrl: 'charging-stations-list.css',
    imports: [MatGridListModule, ChargingStationsSummary, TranslatePipe]
})
export class ChargingStationsList {
    private chargingStationsApp = inject(ChargingStationsApp);
    chargingStations: Signal<ChargingStations[]> = this.chargingStationsApp.chargingStations;


    constructor() {
        this.chargingStationsApp.loadChargingStations();
    }
}