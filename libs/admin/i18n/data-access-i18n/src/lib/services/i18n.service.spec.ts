import { LyTheme2 } from '@alyle/ui';
import { I18nService } from './i18n.service';

describe('I18nService', () => {
  let service: I18nService;
  let theme: LyTheme2;

  beforeEach(() => {
    theme = {} as LyTheme2;
    service = new I18nService(theme);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
