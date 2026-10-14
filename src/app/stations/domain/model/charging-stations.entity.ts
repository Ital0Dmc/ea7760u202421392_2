/**
 * @Summary Charging stations entity representing the charging station data.
 * @Author Italo Damacen
 */
export class ChargingStations {
    constructor(
        public id: string,
        public stationName: string,
        public vehicleType: string,
        public maxGridKwCapacity: number,
        public stallsAvailable: number,
        public isActive: boolean,
        public locationCoordinates: { lat: number; lng: number }
    ) {
    }
}