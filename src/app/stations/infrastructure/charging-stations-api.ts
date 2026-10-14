import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ChargingStationsResponse} from "./charging-stations-response";

@Injectable({
    providedIn: 'root',
})
export class ChargingStationsApi {
    private http = inject(HttpClient);

    private baseUrl = environment.baseApiUrl;
    private chargingStationsEndpoint = environment.chargingStationsEndpoint;

    getChargingStations() {
        return this.http.get<ChargingStationsResponse[]>(`${this.baseUrl}${this.chargingStationsEndpoint}`);
    }
}