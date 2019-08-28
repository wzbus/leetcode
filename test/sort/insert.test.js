import sort from '../../code/sort/insert';

test('sort', () => {
  expect(sort([1, 9, 5, 3, 4])).toEqual([1, 3, 4, 5, 9]);
});
