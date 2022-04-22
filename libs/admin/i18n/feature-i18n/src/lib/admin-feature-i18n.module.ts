import { NgModule } from '@angular/core';
import {
  TranslocoConfig,
  TranslocoModule,
  TRANSLOCO_CONFIG,
} from '@ngneat/transloco';
import { AdminDataAccessI18nModule } from '@nnpz/admin/data-access-i18n';
import { environment } from '@nnpz/admin/util-env';
import { ELangs } from '@nnpz/shared/types';
import { availableLangs } from 'scoped-translations';
import { translocoLoader } from './transloco.loader';

@NgModule({
  imports: [AdminDataAccessI18nModule, TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: {
        reRenderOnLangChange: true,
        availableLangs,
        defaultLang: ELangs.english,
        prodMode: environment.production,
      } as TranslocoConfig,
    },
    translocoLoader,
  ],
})
export class AdminFeatureI18nModule {}
