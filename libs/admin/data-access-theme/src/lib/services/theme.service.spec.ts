import { LyTheme2 } from '@alyle/ui';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;
  let theme: LyTheme2;

  beforeEach(() => {
    theme = {} as LyTheme2;
    service = new ThemeService(theme);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
