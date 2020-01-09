const { generateText } = require('./util');

// Jest single test
test('Should output name with age', () => {
  const text = generateText('Everton', 27);
  expect(text).toBe('Everton (27 years old)');
});