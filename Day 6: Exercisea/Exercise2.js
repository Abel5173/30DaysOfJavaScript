// let prime = []
// for (let i = 0; i < 100; i++) {
//     prime[i] = 0
// }

// for (let j = 0; j < 100; j++) {
//     for (let i = 0; i < 100; i*j) {
//         prime[i] = 100
//     }
// }

// for (let i = 0; i < prime.length; i++) {
//     if(prime[i] == 0){
//      console.log(i)   
//     }
// }  

// let a = []
// let ra = Math.floor(Math.random() * 1000000)
// while(a.length <= ra){
//     let r = Math.floor(Math.random() * 126)+33
//     a.push(r)
// }
// let t = '';
// a.forEach(function(n){
//   t += String.fromCharCode(n)
// })
// console.log(t)
// let r = Math.floor(Math.random()*100)
// var result = ''
// var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
// var charactersLength = characters.length
// for ( var i = 0; i < r; i++ ) {
//   result += characters.charAt(Math.floor(Math.random() * 
// charactersLength))
// }
// console.log(result)

////////>>>>>>>>>>>>>>>>a script which generates a random hexadecimal number<<<<<<<<<<<<<<<<<<<<<<<<
// let n = (Math.random() * 0xfffff * 1000000).toString(16);
// console.log('#' + n.slice(0, 6))

// >>>>>>>>>>>>a script which generates a random rgb color number<<<<<<<<<<<<<<<<<<
// let a = Math.floor(Math.random()*256)
// let b = Math.floor(Math.random()*256)
// let c = Math.floor(Math.random()*256)

// console.log(`rgb(${a},${b},${c})`)

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

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//>>>>>>>>>> Using the above countries array, create the following new array<<<<<<<<<<<
// let a = []
// for(let i = 0; i < countries.length; i++){
//   a.push(countries[i].toUpperCase())
// }
// //console.log(a)
// let t = []
// a.forEach(function(n){
//   t.push(n.length)
// })
// console.log(t)
// let v = []
// for(let i = 0; i < a.length; i++){
//   let s = []
//   let a1 = countries[i]
//   let a2 = a[i].substr(0,3)
//   let a3 = countries[i].length
//   s.push(a1,a2,a3)
//   v.push(s)
// }
// console.log(v)
// let t = []
// for(let i = 0; i < countries.length; i++){
//   if(countries[i].includes('land')){
//       t.push(countries[i])
//   }
// }
// console.log(t)

// let t = []
// for(let i = 0; i < countries.length; i++){
//   let a = countries[i].length - 2
//   if(countries[i].substring(a) === 'ia'){
//       t.push(countries[i])
//   }
// }
// console.log(t)
// let max = 0
// let b = 0
// for(let i = 0; i < countries.length; i++){
//   if(countries[i].length > max){
//       max = countries[i].length
//       b = i
//   }
// }
// console.log(countries[b])

// let t = []
// for(let i = 0; i < countries.length; i++){
//   if(countries[i].length == 5){
//     t.push(countries[i])
//   }
// }
// console.log(t)
// let max = 0
// let b = 0
// for(let i = 0; i < webTechs.length; i++){
//   if(webTechs[i].length > max){
//       max = webTechs[i].length
//       b = i
//   }
// }
// console.log(webTechs[b])
// let t = []
// for(let i = 0; i < webTechs.length; i++){
//   let b = []
//   b.push(webTechs[i], webTechs[i].length)
//   t.push(b)
// }
// console.log(t)
// let a = ['MongoDB', 'Express', 'React', 'Node']
// let b = ''
// for(let i = 0; i < a.length; i++){
//     b += a[i][0]
// }
// console.log(b)
// let a = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 
// for(let x of a){
//   console.log(x)
// }
// let a = ['banana', 'orange', 'mango', 'lemon']
// let b = []
// for(let i = a.length-1; i >= 0; i--){
//   b.push(a[i])
// }
// console.log(b)

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
for(let y of fullStack){
  for(let x of y){
    console.log(x)
  }
}