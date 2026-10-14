import {Component, input} from "@angular/core";
import {ChargingStations} from "../../domain/model/charging-stations.entity";
import {MatCardModule} from "@angular/material/card";
import {DatePipe} from "@angular/common";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
    selector: 'app-charging-stations-summary',
    templateUrl: 'charging-stations-summary.html',
    styleUrl: 'charging-stations-summary.css',
    imports: [MatCardModule, DatePipe, TranslatePipe]
})
export class ChargingStationsSummary {
    chargingStations = input.required<ChargingStations>();
}