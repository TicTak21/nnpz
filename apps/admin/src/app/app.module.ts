import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminFeatureAuthModule } from '@nnpz/admin/feature-auth';
import { AdminFeatureLayoutModule } from '@nnpz/admin/feature-layout';
import { AdminFeatureThemeModule } from '@nnpz/admin/feature-theme';
import { AppStoreModule } from './+store/app-store.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AppStoreModule,
    AdminFeatureLayoutModule,
    AdminFeatureThemeModule,
    AdminFeatureAuthModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
