import * as fs from 'fs'

// const fname = '01.input.txt'
const fname = '01.input.test.txt'

// read each line from 01.input.txt and save each as an element in an array
const input = fs.readFileSync(fname, 'utf-8').split('\n')

console.log(input.length)
console.log('1. ' + input[0])
console.log('2. ' + input[1])
console.log('3. ' + input[2])
console.log('l - 3. ' + input[input.length - 3])
console.log('l - 2. ' + input[input.length - 2])
console.log('l - 1. ' + input[input.length - 1])
