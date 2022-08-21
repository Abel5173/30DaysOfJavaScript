//1. Create a separate countries.js file and store the countries array 
//in to this file, create a separate file web_techs.js and store the webTechs array
//in to this file. Access both file in main.js file

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(' ')
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart.splice(4,1)
shoppingCart[3] = 'Green Tea'

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

if(countries.includes('Ethiopia')){
    console.log('ETHIOPIA')
} else{
    countries.push('Ethiopia')
}

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  if(webTechs.includes('Saas')){
    console.log('Sass is a CSS preprocess')
} else{
    webTechs.push('Saas')
    console.log(webTechs)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)