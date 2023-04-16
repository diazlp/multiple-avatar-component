import getSizeClass from "../utils/getSizeClass";

describe('getSizeClass utility function', () => {
  it('returns the correct size class for xs', () => {
    const sizeClass = getSizeClass('xs');
    expect(sizeClass).toBe('w-8 h-8 text-xs');
  });

  it('returns the correct size class for sm', () => {
    const sizeClass = getSizeClass('sm');
    expect(sizeClass).toBe('w-10 h-10 text-sm');
  });

  it('returns the correct size class for md', () => {
    const sizeClass = getSizeClass('md');
    expect(sizeClass).toBe('w-12 h-12 text-base');
  });

  it('returns the correct size class for lg', () => {
    const sizeClass = getSizeClass('lg');
    expect(sizeClass).toBe('w-16 h-16 text-lg');
  });

  it('returns an empty string for unknown size', () => {
    const sizeClass = getSizeClass('xl');
    expect(sizeClass).toBe('');
  });
});