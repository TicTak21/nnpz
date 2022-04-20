import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TranslocoConfig,
  TranslocoModule,
  TRANSLOCO_CONFIG,
} from '@ngneat/transloco';
import { AdminFeatureAuthModule } from '@nnpz/admin/feature-auth';
import { AdminFeatureI18nModule } from '@nnpz/admin/feature-i18n';
import { AdminFeatureLayoutModule } from '@nnpz/admin/feature-layout';
import { AdminFeatureStoreModule } from '@nnpz/admin/feature-store';
import { AdminFeatureThemeModule } from '@nnpz/admin/feature-theme';
import { environment } from '@nnpz/admin/util-env';
import { ELangs } from '@nnpz/shared/types';
import { availableLangs } from 'scoped-translations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { translocoLoader } from './transloco.loader';

const FEATURES = [
  AdminFeatureStoreModule,
  AdminFeatureLayoutModule,
  AdminFeatureThemeModule,
  AdminFeatureAuthModule,
  AdminFeatureI18nModule,
  TranslocoModule,
];

const COMMON = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  AppRoutingModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [COMMON, FEATURES],
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
  bootstrap: [AppComponent],
})
export class AppModule {}
