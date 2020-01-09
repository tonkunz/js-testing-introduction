const { generateText, checkAndCreate } = require('./util');

// Unit Test Example
test('Should output name with age', () => {
  const text = generateText('Everton', 27);
  expect(text).toBe('Everton (27 years old)');
});
// Unit Test opositive test
test('Should output data-less tex', () => {
  const text = generateText('', null);
  expect(text).toBe(' (null years old)');
})


// Integration Test example
test('Should generate a valid text output', () => {
  const text = checkAndCreate('Everton', 27);
  expect(text).toBe('Everton (27 years old)');
})