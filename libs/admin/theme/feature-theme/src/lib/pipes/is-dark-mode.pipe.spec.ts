import { EThemes } from '@nnpz/shared/types';
import { IsDarkModePipe } from './is-dark-mode.pipe';

describe('IsDarkModePipe', () => {
  let pipe: IsDarkModePipe;

  beforeEach(() => {
    pipe = new IsDarkModePipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should return true when theme dark: ${EThemes.dark}`, () => {
    expect(pipe.transform(EThemes.dark)).toBe(true);
  });

  it(`should return false when theme light: ${EThemes.light}`, () => {
    expect(pipe.transform(EThemes.light)).toBe(false);
  });
});
