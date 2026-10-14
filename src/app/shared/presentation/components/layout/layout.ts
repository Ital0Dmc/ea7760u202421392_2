import {Component} from "@angular/core";
import {LanguageSwitcher} from "../language-switcher/language-switcher";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
    selector: 'app-layout',
    templateUrl: 'layout.html',
    styleUrl: 'layout.css',
    imports: [RouterOutlet,
        RouterLink,
        RouterLinkActive,
        MatToolbar,
        MatButton,
        TranslatePipe, LanguageSwitcher]
})
export class Layout {}