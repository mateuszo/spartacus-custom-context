import { BaseSiteService, BASE_SITE_CONTEXT_ID, CurrencyService, CURRENCY_CONTEXT_ID, LanguageService, LANGUAGE_CONTEXT_ID } from '@spartacus/core';
import { CustomContextService } from './custom-context.service';

export function customServiceMapFactory() {
  return {
    [LANGUAGE_CONTEXT_ID]: LanguageService,
    [CURRENCY_CONTEXT_ID]: CurrencyService,
    [BASE_SITE_CONTEXT_ID]: BaseSiteService,
    custom: CustomContextService
  };
}