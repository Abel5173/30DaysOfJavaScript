// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
  
//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
  
//   const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//   for(let i =0; i<=10;i++){
//     console.log(i)
//   }
//   let i = 0
//   while(i<=10){
//     i++
//   }
//   do{
//     i++
//   }while(i<=10)

//   for(let i =10; i>=0;i--){
//     console.log(i)
//   }
//   let j = 0
//   while(j>=0){
//     j--
//   }
//   do{
//     j--
//   }while(j>=0)
// let n = 11
// for(let i = 0; i<=n; i++){

// }

// for(let i = 0; i<=5; i++){
//     for(let j = 0; j<=i;j++){
//         console.log('#')
//     }
// }

// for(let i = 0; i <= 10;i++){
//   console.log(`${i} * ${i} = `+ (i*i))
// }
// console.log('i\ti^2\ti^3')
// for(let i = 0; i <= 10; i++){
//   console.log(`${i}\t${i*i}\t${i*i*i}`)
// }

// for(let i = 0; i <= 100; i++){
//   if(i%2 == 0){
//     console.log(i)
//   }
// }
// for(let i = 0; i <= 100; i++){
//   if(i%2 != 0){
//     console.log(i)
//   }
// }
// let b = true
// console.log(2)
// for(let i = 3; i <=100; i++){
//   b = true
//   for(let j = 2; j < i; j++){
//     if(i%j === 0){
//       b = false
//       break
//     }
//   }
//   if(b){
//     console.log(i)
//   }
// }

// let sum = 0
// for(let i = 0; i <= 100; i++){
//   sum += i
// }
// console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)

// let a = 0, b = 0
// for(let i = 0; i <= 100; i++){
//   if(i % 2 == 0){
//     a += i
//   }else{
//     b += i
//   }
// }
// console.log(`The sum of all evens from 0 to 100 is ${a}. And the sum of all odds from 0 to 100 is ${b}.`)

// let a = 0, b = 0
// for(let i = 0; i <= 100; i++){
//   if(i % 2 == 0){
//     a += i
//   }else{
//     b += i
//   }
// }
// let arr = []
// arr.push(a)
// arr.push(b)
// console.log(arr)
// let a = []
// for(let i = 0; i < 5; i++){
//   let r = Math.floor(Math.random() * 10)
//   a.push(r)
// }
// console.log(a)
// let a = []
// while(a.length <= 5){
//   let r = Math.floor(Math.random() * 10)
//   if(a.includes(r)){
//     continue
//   }else{
//     a.push(r)
//   }
// }
// console.log(a)

let a = []
while(a.length <= 5){
  let r = Math.floor(Math.random() * 126)+33
  if(a.includes(r)){
    continue
  }else{
    a.push(r)
  }
}
let t = '';
a.forEach(function(n){
  t += String.fromCharCode(n)
})

console.log(t)