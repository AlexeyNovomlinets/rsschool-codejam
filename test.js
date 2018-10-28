const assert = require('assert');
const sumOfOther = require('./src/sumOfOther');
const { sum, make } = require('./src/make');
const recursion = require('./src/recursion');

describe('sumOfOther', () => {
  it('1', () => {
    const res = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(res, [8, 7, 6, 9]);
  });
  it('2', () => {
    const res = sumOfOther([5, 3, 2, 8, 9, 1]);
    assert.deepEqual(res, [23, 25, 26, 20, 19, 27]);
  });
  it('3', () => {
    const res = sumOfOther([1, 3, 4]);
    assert.deepEqual(res, [7, 5, 4]);
  });
  it('4', () => {
    assert.throws(() => sumOfOther('abc'));
    assert.throws(() => sumOfOther(2));
    assert.throws(() => sumOfOther({}));
  });
});

describe('make', () => {
  it('1', () => {
    const res = make(1)(3, 2, 6)(4, 0)(sum);
    assert.deepEqual(res, 16);
  });
  it('2', () => {
    const res = make(1, 2)(3)(4, 1)(sum);
    assert.deepEqual(res, 27);
  });
  it('3', () => {
    const res = make(2, 5, 1, 4)(3, 2)(4, 5)(sum);
    assert.deepEqual(res, 53);
  });
});

describe('recursion', () => {
  it('1', () => {
    const res = recursion({
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } },
    });
    assert.deepEqual(res, [[100], [90, 120], [70, 99, 110, 130]]);
  });
  it('2', () => {
    const res = recursion({
      value: 10,
      left: { value: 5 },
      right: { value: 12 },
    });
    assert.deepEqual(res, [[10], [5, 12]]);
  });
  it('3', () => {
    const res = recursion({
      value: 1111,
      left: { value: 111, left: { value: 11 }, right: { value: 1111 } },
      right: { value: 11111 },
    });
    assert.deepEqual(res, [[1111], [111, 11111], [11, 1111]]);
  });
});
