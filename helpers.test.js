import { helperFunction } from './helpers.js';

test('does the module work', () => {
  const result = helperFunction('hello', 'nice');
  expect(result).toBe('hello and nice are a poor choice of words')
}); 
