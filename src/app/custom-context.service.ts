import { Injectable } from '@angular/core';
import { CurrencyService, LanguageService, SiteContext } from '@spartacus/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SITE_CONTEXTS } from './available-contexts';


const CONTEXTS = SITE_CONTEXTS.map(name => ({ isocode: name }));
@Injectable({
  providedIn: 'root'
})
export class CustomContextService implements SiteContext<string> {

  constructor(private languageService: LanguageService, private currencyService: CurrencyService) { }

  private currentContext$ = new BehaviorSubject<any>(CONTEXTS[0]);

  getAll(): Observable<any[]> {
    return of(CONTEXTS);
  }

  getActive(): Observable<any> {
    return this.currentContext$.pipe(map(ctx => ctx.isocode));
  }

  setActive(isocode: string): void {
    console.log('setting context', isocode);
    const params = isocode.split('-');

    this.languageService.setActive(params[0]);
    this.currencyService.setActive(params[1]);

    this.currentContext$.next({ isocode });
  }


}
