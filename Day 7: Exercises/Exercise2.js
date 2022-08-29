function solveQuadratic(a,b,c){
    let x1 = (-b + Math.sqrt((b**2) - 4*a*c)) / (2 * a)
    let x2 = (-b - Math.sqrt((b**2) - 4*a*c)) / (2 * a)
    if (x1 == x2){
        return x1
    } else{
        return `${x1} ${x2}`
    }
}
console.log(solveQuadratic(1, 7, 12))

function printArray(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

printArray([1,2,3,4,5,6,7,8])

function showDateTime(){
    let date = new Date()
    let DD = parseInt(date.getDay()) + 1
    let MM = parseInt(date.getMonth()) + 1
    let YY = date.getFullYear()
    let hr = date.getHours()
    let mm = date.getMinutes()
    if(hr < 10) hr = '0' + hr
    if(mm < 10) mm = '0' + mm
    if(DD < 10) DD = '0' + DD
    if(MM < 10) MM = '0' + MM
    console.log(`${DD}/${MM}/${YY} ${hr}:${mm}`)
}
showDateTime()

function swapValues(x, y) {
    let temp = x
    x = y
    y = temp
    return `x => ${x}, y => ${y}`
}
console.log(swapValues(3,4))

function reverseArray(arr) {
    let a = []
    let i = arr.length - 1
    let j = 0
    while(i >= 0){
        a[j] = arr[i]
        i--
        j++
    }
    return a
}
console.log(reverseArray(['A', 'B', 'C']))

function capitalizeArray(arr){
    let a = []
    for(let x of arr){
        a.push(x.toUpperCase())
    }
    return a
}
console.log(capitalizeArray(['abebe', 'kebede', 'bekele', 'abiy']))

function addItem() {
    let arr = []
    for(let i of arguments){
        arr.push(i)
    }
    return arr
}
console.log(addItem(1,3,24,5,6,7,8,9))

let arr = [1,2,3,4,5,6]
function removeItem(prm){
    let a = arr.slice(0,prm)
    let b = arr.slice(prm + 1)
    let c = a.concat(b)
    return c
}
console.log(removeItem(2))

function sumOfNumbers(range){
    let sum = 0
    for(let i = 1; i <= range; i++) {
        sum += i
    }
    return sum
}
console.log(sumOfNumbers(5))

function sumOfOdds(range){
    let sum = 0
    for(let i = 1; i <= range; i++) {
        if(i%2 == 0){
            sum += i
        }
    }
    return sum
}
console.log(sumOfOdds(5))

function sumOfEven(range){
    let sum = 0
    for(let i = 1; i <= range; i++) {
        if(i%2 != 0){
            sum += i
        }
    }
    return sum
}
console.log(sumOfEven(5))

function evensAndOdds(numRange) {
    let cntEven = 0
    let cntOdd = 0
    for(let i = 0; i <= numRange; i++) {
        if(i%2 == 0){
            cntEven += 1
        } else{
            cntOdd += 1
        }
    }
    console.log(`The number of odds are ${cntOdd}.`)
    console.log(`The number of evens are ${cntEven}.`)
}
evensAndOdds(100)

function sum() {
    let sum = 0
    for(let i of arguments){
        sum += i
    }
    console.log(sum)
}
sum(1, 2, 3, 4)
//============> Write a function which generates a randomMacAddress<==================
const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16)
    let m = (Math.random() * 0xfffff * 1000000).toString(16)
    let t = n.slice(0,6)
    let s = m.slice(0,6)
    let hx = t.concat(s)
    let l = []
    let a1 = hx.slice(0,2)
    let a2 = hx.slice(2,4)
    let a3 = hx.slice(4,6)
    let a4 = hx.slice(6,8)
    let a5 = hx.slice(8,10)
    let a6 = hx.slice(10,12)
    l.push(a1,a2,a3,a4,a5,a6)
    let e = l.join(':')
    return e
  }
  
  console.log(random_hex_color_code())

//===============> Writ a function which generates a randomUserIp <===============
  function randomUserIp(){
    let ip1 = Math.floor(Math.random() * 255) + 1
    let ip2 = Math.floor(Math.random() * 255) + 1
    let ip3 = Math.floor(Math.random() * 255) + 1
    let ip4 = Math.floor(Math.random() * 255) + 1
    let l = [ip1, ip2, ip3, ip4]
    let a = l.join('.')
    return a
  }
console.log(randomUserIp())

function randomHexaNumberGenerator(){
    let n = (Math.random() * 0xfffff * 1000000).toString(16)
    let t = n.slice(0,6)
    return '#' + t
}
console.log(randomHexaNumberGenerator());

//===================> Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id <================
function userIdGenerator(){
    let c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let l = c.split('')
    let s = ''
    for(let i = 0; i < 7; i++) {
        s += l[Math.floor(Math.random() * 62)]
    }
    return s
}
console.log(userIdGenerator())
