// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// isPhoneNumber
test('(000) 000-0000 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(000) 000-0000')).toBe(true);
  });

test('000-000-0000 is a valid phone number', () => {
    expect(functions.isPhoneNumber('000-000-0000')).toBe(true);
  });

test('(000) 000-000 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('(000) 000-000')).toBe(false);
  });

test('(000) 00-0000 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('(000) 00-0000')).toBe(false);
  });

// isEmail
test('a@gmail.com is a valid email', () => {
    expect(functions.isEmail('a@gmail.com')).toBe(true);
  });

test('a@gmail.cn is a valid email', () => {
    expect(functions.isEmail('a@gmail.cn')).toBe(true);
  });

test('@gmail.com is not a valid email', () => {
    expect(functions.isEmail('@gmail.com')).toBe(false);
  });

test('a@gmail. is not a valid email', () => {
    expect(functions.isEmail('a@gmail.')).toBe(false);
  });

// isStrongPassword
test('aaaa is a strong password', () => {
    expect(functions.isStrongPassword('aaaa')).toBe(true);
  });

test('aaaa_888888888 is a strong password', () => {
    expect(functions.isStrongPassword('aaaa_888888888')).toBe(true);
  });

test('&890 is not a strong password', () => {
    expect(functions.isStrongPassword('&890')).toBe(false);
  });

test('a&890 is not a strong password', () => {
    expect(functions.isStrongPassword('a&890')).toBe(false);
  });

// isDate
test('1/1/2000 is a valid date', () => {
    expect(functions.isDate('1/1/2000')).toBe(true);
  });

test('01/01/2000 is a valid date', () => {
    expect(functions.isDate('01/01/2000')).toBe(true);
  });

test('01/01/200 is not a valid date', () => {
    expect(functions.isDate('01/01/200')).toBe(false);
  });

test('1//2000 is not a valid date', () => {
    expect(functions.isDate('1//2000')).toBe(false);
  });

// isHexColor
test('#AAA is a valid hex color', () => {
    expect(functions.isHexColor('#AAA')).toBe(true);
  });

test('aaa is a valid hex color', () => {
    expect(functions.isHexColor('aaa')).toBe(true);
  });

test('#ABCD is not a valid hex color', () => {
    expect(functions.isHexColor('#ABCD')).toBe(false);
  });

test('#ab is not a valid date', () => {
    expect(functions.isHexColor('#ab')).toBe(false);
  });