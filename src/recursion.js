const rec = (value) => {
  const result = [];
  const recursion = (val, i = 0) => {
    result[i] = [...(result[i] || []), val.value];
    if (val.left) recursion(val.left, i + 1);
    if (val.right) recursion(val.right, i + 1);
    return result;
  };
  return recursion(value);
};
module.exports = rec;
