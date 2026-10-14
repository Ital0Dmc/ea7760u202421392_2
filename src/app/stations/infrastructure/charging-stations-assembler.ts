import {ChargingStationsResponse} from "./charging-stations-response";
import {ChargingStations} from "../domain/model/charging-stations.entity";

/**
 * @Summary Assembler for converting ChargingStationsResponse to ChargingStations entity.
 * @Author Italo Damacen
 */
export class ChargingStationsAssembler {
    static toEntityFromResponse(response: ChargingStationsResponse): ChargingStations {
        return {
            id: response.id,
            stationName: response.stationName,
            vehicleType: response.vehicleType,
            maxGridKwCapacity: response.maxGridKwCapacity,
            stallsAvailable: response.stallsAvailable,
            isActive: response.isActive,
            locationCoordinates: {
                lat: response.locationCoordinates.lat,
                lng: response.locationCoordinates.lng
            }
        };
    }

    static toEntityFromResponseArray(responses: ChargingStationsResponse[]): ChargingStations[] {
        return responses.map(response => this.toEntityFromResponse(response));
    }
}