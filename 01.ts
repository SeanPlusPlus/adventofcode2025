import * as fs from 'fs'

// enable logging
const LOG = true

// const fname = '01.input.txt'
const fname = '01.input.test.txt'

// read each line from 01.input.txt and save each as an element in an array
const input = fs.readFileSync(fname, 'utf-8').split('\n')

// create an array of integers from 0 to 99
const DIAL = 100
const nums: number[] = []
for (let i = 0; i < DIAL; i++) {
  nums.push(i)
}

// number of times dial is pointed at zero
let zeroCount = 0

let pos = 50
LOG && console.log('Starting position:', pos)

for (var i = 0; i < input.length; i++) {
  const rotate = input[i].charAt(0) === 'L' ? '-' : '+'
  const amount = parseInt(rotate + input[i].slice(1), 10)

  // wrap left
  if (amount < 0 && Math.abs(amount) > pos) {
    pos = DIAL + (pos + amount)
    if (pos === 0) zeroCount++
    LOG && console.log(i, pos, amount, 'left wrap')
    continue
  }

  // move left no wrap
  if (amount < 0) {
    pos = pos + amount
    if (pos === 0) zeroCount++
    LOG && console.log(i, pos, amount, 'left no wrap')
    continue
  }

  // move right wrap
  if (amount > 0 && pos + amount >= DIAL) {
    pos = pos + amount - DIAL
    if (pos === 0) zeroCount++
    LOG && console.log(i, pos, amount, 'right wrap')
    continue
  }

  // move right no wrap
  if (amount > 0) {
    pos = pos + amount
    if (pos === 0) zeroCount++
    LOG && console.log(i, pos, amount, 'right no wrap')
    continue
  }
}

console.log('Zero count:', zeroCount)
