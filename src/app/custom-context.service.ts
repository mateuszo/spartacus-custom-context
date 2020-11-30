import { Injectable } from '@angular/core';
import { CurrencyService, LanguageService, SiteContext } from '@spartacus/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SITE_CONTEXTS } from './available-contexts';

@Injectable({
  providedIn: 'root'
})
export class CustomContextService implements SiteContext<string> {

  constructor(private languageService: LanguageService, private currencyService: CurrencyService) { }

  private currentContext = new BehaviorSubject<string>(SITE_CONTEXTS[0]);

  getAll(): Observable<string[]> {
    return of(SITE_CONTEXTS);
  }

  getActive(): Observable<string> {
    return this.currentContext;
  }

  setActive(isocode: string): void {
    console.log('setting context', isocode);
    const params = isocode.split('-');

    this.languageService.setActive(params[0]);
    this.currencyService.setActive(params[1]);

    this.currentContext.next(isocode);
  }


}
