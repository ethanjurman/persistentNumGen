
// 1 - 1x, x1, 11x, x11, ...
// 2 - ...
// 3 - ...
// 4 - 22x, 2x2, x22
// 5 - ...
// 6 - 3x2, 2x3, 32x, 23x, x23, x32
// 7 - ...
// 8 - 4x2, 2x4, 42x, 24x, x24, x42, 222x, 22x2, 2x22, x222
// 9 - 33x, 3x3, x33

// The process
// 1. get factors of number
//   if all factors are lower than 10, we are good for step 2
// 2. apply each transform (listed above)
const number = process.argv[2]
// console.log({number})

const totalFactors = [];

const getFactors = (num, factors = []) => {
  if (num < 10) {
    console.log({factors: [num, ...factors]})
    totalFactors.push([num, ...factors].join(""))
  }
  [2,3,4,5,6,7,8,9].forEach((factor) => {
    if (num % factor === 0) {
      getFactors(num / factor, [factor, ...factors])
    }
  })
}

getFactors(Number(number))
getFactors(Number(number), [1])
console.log({totalFactors})

// [ 26.  34.  43.  62. 126. 134. 143. 162. 216. 223. 232. 261. 314. 322.
// 341. 413. 431. 612. 621.]