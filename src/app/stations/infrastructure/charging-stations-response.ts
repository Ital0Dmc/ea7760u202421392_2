/**
 * @Summary Response interface for Charging Stations.
 * @Author Italo Damacen
 */
export interface ChargingStationsResponse {
    id: string,
    stationName: string,
    vehicleType: string,
    maxGridKwCapacity: number,
    stallsAvailable: number,
    isActive: boolean,
    locationCoordinates: {
        lat: number,
        lng: number,
    }
}