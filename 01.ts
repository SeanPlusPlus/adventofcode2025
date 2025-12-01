import * as fs from 'fs'

// read each line from 01.input.txt and save each as an element in an array
const input = fs.readFileSync('01.input.txt', 'utf-8').split('\n')

console.log(input.length)
console.log(input[0])
console.log(input[1])
console.log(input[2])
console.log(input[input.length - 3])
console.log(input[input.length - 2])
console.log(input[input.length - 1])
