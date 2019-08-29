import profit from '../../code/greed/profit';

test('profit:1', () => {
  expect(profit([7, 1, 5, 3, 6, 4])).toBe(7);
});
test('profit:2', () => {
  expect(profit([1, 2, 3, 4, 5])).toBe(4);
});
test('profit:3', () => {
  expect(profit([7, 6, 4, 3, 1])).toBe(0);
});
