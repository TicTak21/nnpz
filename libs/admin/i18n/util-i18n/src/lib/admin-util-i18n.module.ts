import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

@NgModule({
  imports: [TranslocoModule],
  exports: [TranslocoModule],
})
export class AdminUtilI18nModule {
  static forChild(
    scopeName: string,
    loader: Record<string, CallableFunction>,
  ): ModuleWithProviders<AdminUtilI18nModule> {
    return {
      ngModule: AdminUtilI18nModule,
      providers: [
        {
          provide: TRANSLOCO_SCOPE,
          useValue: {
            scope: scopeName,
            loader,
          },
        },
      ],
    };
  }
}
