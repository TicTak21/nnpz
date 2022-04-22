import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ELangs, TStorageItem } from '@nnpz/shared/types';
import { filter, map, Observable, of, tap, withLatestFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly storageKey: string = 'i18n';
  private readonly itemKey: string = 'currentLang';

  constructor(private readonly translocoService: TranslocoService) {}

  get currentLang(): Observable<ELangs> {
    return of(this.translocoService.getActiveLang() as ELangs);
  }

  get storageLang(): Observable<ELangs> {
    return of(localStorage.getItem(this.storageKey)).pipe(
      filter(Boolean),
      map<string, TStorageItem<ELangs>>(str => JSON.parse(str)),
      map(json => json[this.itemKey]),
    );
  }

  initLang() {
    return this.storageLang.pipe(
      withLatestFrom(this.currentLang),
      tap(([storageLang, currentLang]) => {
        if (storageLang !== currentLang)
          this.translocoService.setActiveLang(storageLang);
      }),
    );
  }
}
