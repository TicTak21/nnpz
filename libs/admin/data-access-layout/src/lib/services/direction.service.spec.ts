import { LyTheme2 } from '@alyle/ui';
import { DirectionService } from './direction.service';

describe('DirectionService', () => {
  let service: DirectionService;
  let theme: LyTheme2;

  beforeEach(() => {
    theme = {} as LyTheme2;
    service = new DirectionService(theme, document);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
