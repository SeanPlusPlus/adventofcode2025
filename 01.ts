import * as fs from 'fs'

// input data file name
const fname = '01.input.txt'

// read each line from input data and save each as an element in an array
const input = fs.readFileSync(fname, 'utf-8').split('\n')

// total positions on dial
const DIAL = 100

// number of times dial is pointed at zero
let zeroCount = 0

// starting position
let pos = 50

for (var i = 0; i < input.length; i++) {
  const rotate = input[i].charAt(0) === 'L' ? '-' : '+'
  const amount = parseInt(rotate + input[i].slice(1), 10) % 100

  if (amount < 0) {
    // LEFT
    if (Math.abs(amount) > pos) {
      // left wrap
      pos = pos + amount + DIAL
    } else {
      // simple turn left
      pos = pos + amount
    }
  } else {
    // RIGHT
    if (pos + amount >= DIAL) {
      // right wrap
      pos = pos + amount - DIAL
    } else {
      // simple turn right
      pos = pos + amount
    }
  }

  if (pos === 0) zeroCount++
}

console.log('Answer:', zeroCount)
