import { TranslocoService } from '@ngneat/transloco';
import { I18nService } from './i18n.service';

describe('I18nService', () => {
  let service: I18nService;
  let translocoService: TranslocoService;

  beforeEach(() => {
    service = new I18nService(translocoService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
