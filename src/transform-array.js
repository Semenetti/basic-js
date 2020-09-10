module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw 'Error';

  let result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '--discard-prev') {
      if (i > 0) {
        result.pop();
      }
    } else if (arr[i] === '--discard-next') {
      if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
        i += 2;
      } else {
        i += 1;
      }
    } else if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        result = [...result, arr[i + 1]];
      }
    } else if (arr[i] === '--double-prev') {
      if (i > 0) result = [...result, arr[i - 1]];
    } else {
      result = [...result, arr[i]];
    }
  }
  return result;
};
