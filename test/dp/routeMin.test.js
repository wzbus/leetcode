import routeMin from '../../code/dp/routeMin';

test('0,2,0', () => {
  expect(routeMin([
    [0, 1, 100],
    [1, 2, 100],
    [0, 2, 500]
  ], 0, 2, 0)).toBe(500);
  expect(routeMin([[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1)).toBe(200);
  expect(routeMin([[4, 1, 1], [1, 2, 3], [0, 3, 2], [0, 4, 10], [3, 1, 1], [1, 4, 3]], 2, 1, 1)).toBe(-1);
});
