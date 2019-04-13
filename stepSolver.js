const { getTotalFactors } = require("./getTotalFactors");
const { perSolve } = require("./perSolve");
const Big = require('./big.js');

const userNumber = new Big(process.argv[2])
if (process.argv[3] === 'getTotalFactors') {
  console.log(getTotalFactors(userNumber))
  return;
}
if (process.argv[3] === 'perSolve') {
  console.log(perSolve(userNumber, 1, true))
  return;
}

console.log({userNumber: userNumber.toString()})

maxStepSize = 0;
testedNumbers = {};

count = 0;

const isAlreadyTested = (number) => {
  if (number in testedNumbers) {
    process.stdout.write(`testing (pass, count: ${count++}) ${number}            \r`)
    return false;
  }
  testedNumbers[number] = null;
  process.stdout.write(`testing (test, count: ${count++}) ${number}                     \r`)
  return true;
}

const getResults = (testNumber) => {
  const factorResults = getTotalFactors(testNumber)
  process.stdout.write(`factorResults ${factorResults.length}, ${testNumber}                                \r`)
  const {maxStep, number} = factorResults.reduce(({maxStep, number}, factor) => {
    const stepSize = perSolve(new Big(factor));
    if (stepSize > maxStep) {
      return {maxStep: stepSize, number: factor}
    }
    return {maxStep, number}
  }, {maxStep: maxStepSize, number: 0})
  if (maxStep > maxStepSize) {
    console.log("")
    console.log("New Max Step:", maxStep)
    console.log("New Number:", number)
    maxStepSize = maxStep
  }
  return factorResults.filter(isAlreadyTested).map((factor) => getResults(new Big(factor)))
}

getResults(new Big(userNumber))