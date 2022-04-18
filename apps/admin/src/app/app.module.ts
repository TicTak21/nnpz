import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminFeatureAuthModule } from '@nnpz/admin/feature-auth';
import { AdminFeatureLayoutModule } from '@nnpz/admin/feature-layout';
import { AdminFeatureStoreModule } from '@nnpz/admin/feature-store';
import { AdminFeatureThemeModule } from '@nnpz/admin/feature-theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const FEATURES = [
  AdminFeatureStoreModule,
  AdminFeatureLayoutModule,
  AdminFeatureThemeModule,
  AdminFeatureAuthModule,
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
  bootstrap: [AppComponent],
})
export class AppModule {}
