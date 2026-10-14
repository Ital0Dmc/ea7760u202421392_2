import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'view-page-not-found',
  templateUrl: 'page-not-found.html',
  styleUrl: 'page-not-found.css',
  imports: [MatButton, RouterLink, TranslatePipe],
})
/**
 * Page not found view: shows the invalid path the user tried to open.
 */
export class PageNotFound {
  /** The URL that did not match any route. */
  invalidPath = inject(Router).url;
}
