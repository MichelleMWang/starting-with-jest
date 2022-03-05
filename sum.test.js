const sum = require('./sum');
const capitalize = require('./capitalize'); 

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('happy path', () => {
  expect(capitalize('hi')).toBe('Hi'); 
}); 
test('one character', () => {
  expect(capitalize('i')).toBe('I'); 
}); 
test('more than one word', () => {
  expect(capitalize('piglets fly')).toBe('Piglets fly'); 
}); 
test('nonletter first character', () => {
  expect(capitalize('26 thousand')).toBe('26 thousand'); 
}); 
test('empty string', () => {
  expect(capitalize(' ')).toBe(' '); 
}); 