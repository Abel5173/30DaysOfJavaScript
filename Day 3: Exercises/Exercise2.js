let base = prompt('Enter base:')
let hieght = prompt('Enter hieght:')
let area = 0.5*base*hieght
console.log(`The area of the triangle is ${area}`)

let a = prompt('Enter side a: ')
let b = prompt('Enter side b: ')
let c = prompt('Enter side c: ')
let perimeter = parseInt(a) + parseInt(b) + parseInt(c)
console.log(`The perimeter of the triangle is ${perimeter}`)

let hr = prompt('Enter hieght hr: ')
let br = prompt('Enter base br: ')
let rperimeter = parseInt(hr)*2 + parseInt(br)*2
let areaR = hr*br
console.log(`The perimeter of the rectangle is ${rperimeter}`)
console.log(`The area of the rectangel is ${areaR}`)

let pi = 3.14
let r = prompt('Enter radius r: ')
let circumfrance = 2*pi*r
let areaC = pi*r*r
console.log(`The circumfrance of the circle is ${circumfrance}`)
console.log(`The area of the circle is ${areaC}`)

let slope = 2

let y2 = 10
let y1 = 2
let x2 = 16
let x1 = 2
let m = (y2-y1)/(x2-x1)
console.log(m)

console.log(slope - m)

let a1 = 1
let b1 = 6
let c1 = 9
let X1 = (b1+Math.sqrt(b1*b1 - 4*a*c))/(2*a)
let X2 = (b1-Math.sqrt(b1*b1 - 4*a*c))/(2*a)
console.log(X1, X2)

'Abel'.length > 7 ? console.log('long') : console.log('short')

let firstName = 'Abel'
let lastName = 'Zeleke'
firstName.length > lastName.length ? console.log(
    `Your first name, ${firstName} is longer than your family name, ${lastName}`
) : console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`)

let myAge = 250
let yourAge = 25
console.log(`I'm ${myAge-yourAge} longer than you`)

let bYear = prompt('Enter birth year: ')
let cYear = new Date()
let dYear = cYear.getFullYear() - bYear
dYear > 18 ? console.log(`You are ${dYear}. You are old enough to drive`) :
console.log(`You are ${dYear}. You will be allowed to drive after ${18 - dYear} years.`)

let Year = prompt('Enter number of years you live: ')
const dy = new Date(Year)
let g = dy.getFullYear() + 100

const d = new Date()
let Y = d.getFullYear()
let M = d.getMonth()
let D = d.getDay()
let H = d.getHours()
let mm = d.getMinutes()
console.log(`${Y}-${M}-${D} ${H}:${mm}`)
console.log(`${D}-${M}-${Y} ${H}:${mm}`)
console.log(`${D}/${M}/${Y} ${H}:${mm}`)