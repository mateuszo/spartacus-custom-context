import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { ContextServiceMap } from '@spartacus/core';
import { B2cStorefrontModule, OutletRefModule, SiteContextSelectorModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { SITE_CONTEXTS } from './available-contexts';
import { CustomContextComponent } from './custom-context/custom-context.component';
import { customServiceMapFactory } from './custom-service-map';


@NgModule({
  declarations: [
    AppComponent,
    CustomContextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://spartacus-training.eastus.cloudapp.azure.com:8443',
          prefix: '/occ/v2/'
        }
      },
      context: {
        custom: SITE_CONTEXTS,
        currency: ['USD'],
        language: ['en'],
        baseSite: ['electronics-spa'],
        urlParameters: ['custom'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '3.0'
      }
    }),
    OutletRefModule,
    SiteContextSelectorModule
  ],
  providers: [
    {
      provide: ContextServiceMap,
      useFactory: customServiceMapFactory,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
