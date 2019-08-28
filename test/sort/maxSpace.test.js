import sort from '../../code/sort/maxSpace';

test('sort:1', () => {
  expect(sort([3, 6, 9, 1])).toBe(3);
});
test('sort:2', () => {
  expect(sort([10])).toBe(0);
});
test('sort:3', () => {
  expect(sort([13, 16, 19, 1])).toBe(12);
});
