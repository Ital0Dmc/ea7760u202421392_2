import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';

/**
 * Toggle buttons to switch the application language (EN / ES).
 *
 * @summary Language switcher component.
 * @author Italo Damacen
 */
@Component({
  selector: 'app-language-switcher',
  templateUrl: 'language-switcher.html',
  styleUrl: 'language-switcher.css',
  imports: [MatButtonToggleGroup, MatButtonToggle, TranslatePipe],
})
export class LanguageSwitcher {
  private translate = inject(TranslateService);

  /** Language currently in use. */
  protected currentLang = this.translate.getCurrentLang() ?? 'en';

  /** Languages registered in app.config (en, es). */
  protected languages = [...this.translate.getLangs()];

  /**
   * Changes the language of the whole application.
   */
  useLanguage(language: string) {
    this.translate.use(language);
    this.currentLang = language;
  }
}
