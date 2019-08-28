import regMatch from '../../code/regexp/regMatch';

test('regMatch', () => {
  expect(regMatch('aa', 'a')).toBe(false);
  expect(regMatch('aa', 'a*')).toBe(true);
  expect(regMatch('ab', '.*')).toBe(true);
  expect(regMatch('aab', 'c*a*b')).toBe(true);
  expect(regMatch('mississippi', 'mis*is*p*.')).toBe(false);
});
