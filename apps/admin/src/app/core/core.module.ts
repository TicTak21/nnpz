import { NgModule } from '@angular/core';
import { EditorModule } from './editor/editor.module';
import { LayoutComponent } from './layout/containers/layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { StoreModule } from './store/store.module';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  imports: [StoreModule, ThemeModule, LayoutModule, EditorModule],
  exports: [LayoutComponent],
})
export class CoreModule {}
