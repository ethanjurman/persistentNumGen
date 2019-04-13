// const number = process.argv[2]
const Big = require('./big.js');

const memoize = {}

const getFactors = (totalFactors, num, factors = []) => {
  process.stdout.write(`getFactors: [${totalFactors.length + 1}] - ${num} - [${factors.length}]              \r`)
  if (num < 10) {
    process.stdout.write(`${totalFactors.length + 1} - ${[Number(num), ...factors]}                          \r`)
    totalFactors.push([Number(num), ...factors].join(""))
  }
  [2,3,4,5,6,7,8,9].forEach((factor) => {
    if (!num.mod(factor).c[0]) {
      getFactors(totalFactors, num.div(factor), [factor, ...factors])
    }
  })
}

const getTotalFactors = (num) => {
  const totalFactors = [];
  getFactors(totalFactors, num)
  totalFactors.length && console.log({num: num.toString(), totalFactors: totalFactors.length})
  return totalFactors;
}

// getTotalFactors(new Big(number))

module.exports = {getTotalFactors}