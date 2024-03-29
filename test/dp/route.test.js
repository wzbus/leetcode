import dp from '../../code/dp/route';

test('dp', () => {
  let arr = [
    [0, 0],
    [0, 0],
    [0, 0]
  ];
  expect(dp(arr, 3, 2)).toBe(3);
});
test('dp:2', () => {
  let arr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  expect(dp(arr, 7, 3)).toBe(28);
});

test('dp:3', () => {
  let arr = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ];
  expect(dp(arr, 3, 3)).toBe(2);
});
test('dp:4', () => {
  let arr = [[0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]];
  expect(dp(arr, 5, 4)).toBe(7);
});
