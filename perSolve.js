// const userNumber = Number(process.argv[2])
const Big = require('./big.js');

const perSolve = (number, step = 1, trace) => {
  process.stdout.write(`step ${step} testing ${number}                          \r`)
  if (number < 10) {
    return step
  }

  if (number.toString().includes('0')) {
    trace && console.log({step, res: '0'})
    return step
  }

  const res = number.c.map(Big).reduce((prod, v) => prod.times(v))
  trace && console.log({step, res: res.toString()})
  return perSolve(res, step + 1, trace)
}

// perSolve(new Big(userNumber))

module.exports = {perSolve}