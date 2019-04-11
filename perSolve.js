const userNumber = Number(process.argv[2])

const perSolve = (number, step = 1) => {
  if (number < 10) {
    return "DONE"
  }

  const digits = String(number).split("").map(Number)
    const res = digits.reduce((prodMulti, digit) => {
    return digit * prodMulti
  })
  console.log({step, res})
  perSolve(res, step + 1)
}

perSolve(userNumber)