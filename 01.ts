import * as fs from 'fs'

// const fname = '01.input.txt'
const fname = '01.input.test.txt'

// read each line from 01.input.txt and save each as an element in an array
const input = fs.readFileSync(fname, 'utf-8').split('\n')

// create an array of integers from 0 to 99
const arr: number[] = []
for (let i = 0; i < 100; i++) {
  arr.push(i)
}

for (var i = 0; i < input.length; i++) {
  const rotate = input[i].charAt(0) === 'L' ? '-' : '+'
  const amount = parseInt(rotate + input[i].slice(1), 10)
  console.log(i, input[i], amount)
}
