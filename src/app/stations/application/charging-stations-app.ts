import {inject, Injectable, signal} from "@angular/core";
import {ChargingStationsApi} from "../infrastructure/charging-stations-api";
import {ChargingStations} from "../domain/model/charging-stations.entity";
import {ChargingStationsAssembler} from "../infrastructure/charging-stations-assembler";

@Injectable({
    providedIn: 'root',
})
export class ChargingStationsApp {
    private chargingStationsApi = inject(ChargingStationsApi);

    chargingStations = signal<ChargingStations[]>([]);

    loadChargingStations() {
        this.chargingStationsApi.getChargingStations().subscribe(response => this.chargingStations.set(ChargingStationsAssembler.toEntityFromResponseArray(response)));
    }
}