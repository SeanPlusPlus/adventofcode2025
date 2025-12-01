import * as fs from 'fs'

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

let pos = 50

for (var i = 0; i < input.length; i++) {
  const rotate = input[i].charAt(0) === 'L' ? '-' : '+'
  const amount = parseInt(rotate + input[i].slice(1), 10)
  console.log(i, pos, amount)

  // wrap left
  if (amount < 0 && Math.abs(amount) > pos) {
    console.log('wrapping left')
    pos = DIAL + (pos + amount)
    continue
  }

  // move left no wrap
  if (amount < 0) {
    console.log('moving left no wrap')
    pos = pos + amount
    continue
  }
}
