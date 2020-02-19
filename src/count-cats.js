module.exports = function countCats(matrix) {
  let result = matrix.reduce((counter, matrixRows) =>counter + matrixRows.reduce((counterCats, matrixRow) => counterCats + ((matrixRow !== "^^") ? 0 : 1), 0), 0);
  
  return result
};
