import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocationsPageComponent } from './containers/locations-page/locations-page.component';
import { LocationsRoutingModule } from './locations-routing.module';

@NgModule({
  declarations: [LocationsPageComponent],
  imports: [CommonModule, LocationsRoutingModule, LyTypographyModule],
})
export class LocationsModule {}
