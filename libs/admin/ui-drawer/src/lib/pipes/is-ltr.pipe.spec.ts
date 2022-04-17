import { Dir } from '@alyle/ui';
import { IsLtrPipe } from './is-ltr.pipe';

describe('IsLtrPipe', () => {
  let pipe: IsLtrPipe;

  beforeEach(() => {
    pipe = new IsLtrPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should return true when dir = ${Dir.ltr}`, () => {
    expect(pipe.transform(Dir.ltr)).toBe(true);
  });

  it(`should return true when dir = ${Dir.rtl}`, () => {
    expect(pipe.transform(Dir.rtl)).toBe(false);
  });
});
