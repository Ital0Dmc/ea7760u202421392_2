import {Component} from "@angular/core";
import {TranslatePipe} from "@ngx-translate/core";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatSelect} from "@angular/material/select";
import {MatOption} from "@angular/material/core";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {VEHICLE_TYPES} from "../../../domain/vehicle-types";

@Component({
    selector: 'app-vehicle-form',
    templateUrl: 'vehicle-form.html',
    styleUrl: 'vehicle-form.css',
    imports: [
        MatFormField,
        MatLabel,
        MatSelect,
        MatOption,
        ReactiveFormsModule,
        MatInput,
        MatButton,
        TranslatePipe]
})
export class VehicleForm {

    vehicleTypes = VEHICLE_TYPES;

    form = new FormGroup({
        vehicleType: new FormControl<string | null>(null, Validators.required),
    })
}