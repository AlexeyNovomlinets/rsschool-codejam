const sumOfOther = (value) => {
  if (!Array.isArray(value)) throw new Error('Invalid input!');
  return value.map((e, ind) => value.reduce((acm, a, i) => (acm + (ind === i ? 0 : a)), 0));
};
module.exports = sumOfOther;
