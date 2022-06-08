import { Item } from './item';

describe('Item', () => {
  it('should create an instance', () => {
    expect(new Item("zara", 10)).toBeTruthy();
  });
});
