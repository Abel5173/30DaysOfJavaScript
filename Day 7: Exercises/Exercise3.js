function userIdGenerator(){
    let a = 8//prompt()
    let b = 5//prompt()
    let c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let l = c.split('')
    
    for (let j = 0; j < b; j++) {
        let s = ''  
        for(let i = 0; i < a; i++) {
            s += l[Math.floor(Math.random() * 62)]
        }
        console.log(s)
    }
}
userIdGenerator()

function rgbColorGenerator(){
    let a = Math.floor(Math.random() * 255) +1
    let b = Math.floor(Math.random() * 255) +1
    let c = Math.floor(Math.random() * 255) +1
    console.log(`rgb(${a},${b},${c})`)
}
rgbColorGenerator()

function randomHexaNumberGenerator(){
    let r = Math.floor(Math.random() * 10) 
    let l = []
    for(let i = 0; i < r; i++){
        let n = (Math.random() * 0xfffff * 1000000).toString(16)
        let t = n.slice(0,6)
        let a = '#' + t
        l.push(a)
    }
}
console.log(randomHexaNumberGenerator())

let a = 2
let b = []
for (var i = 0; i < a*8; i++){
    b.push(i)
}
console.log(i)

function arrayOfHexaColors(){
    let a = Math.floor(Math.random() * 100) + 1
    let l = []
    for(let i = 0; i < a; i++){
        let n = (Math.random() * 0xfffff * 1000000).toString(16)
        let t = n.slice(0,6)
        t = '#' + t
        l.push(t)
    }
    console.log(l)
}
arrayOfHexaColors()

function arrayOfRgbColors(){
    let a = Math.floor(Math.random() * 50)+1
    let arr = []
    for(let i = 0; i < 50; i++){
        let d = Math.floor(Math.random() * 255) +1
        let b = Math.floor(Math.random() * 255) +1
        let c = Math.floor(Math.random() * 255) +1
        let t = `rgb(${d},${b},${c})`
        arr.push(t)
    }
    console.log(arr)
}
arrayOfRgbColors()

function convertHexaToRgb(s){
    let a = s.slice(1)
    let a1 = a.slice(0,2)
    let a2 = a.slice(2,4)
    let a3 = a.slice(4,6)
    let t1 = parseInt(a1, 16)
    let t2 = parseInt(a2, 16)
    let t3 = parseInt(a3, 16)
    console.log(`rgb(${t1},${t2},${t3})`)
}
convertHexaToRgb('#a3e12f')

function convertRgbToHexa(rgb){
    let hex = []
    for(let x of rgb){
        hex.push(x.toString(16))
    }
    let h = ''
    for(let x of hex){
        if(x.length == 1){
            h += '0'+x
        } else{
            h += x
        }
    }
    console.log('#'+h)
}
convertRgbToHexa([241, 12, 113])

function generateColors(s, a){
    if (s == 'rgb'){
        let arr = []
        for(let i = 0; i < a; i++){
            let d = Math.floor(Math.random() * 255) +1
            let b = Math.floor(Math.random() * 255) +1
            let c = Math.floor(Math.random() * 255) +1
            let t = `rgb(${d},${b},${c})`
            arr.push(t)
        }
    return arr
    } else{
        let l = []
        for(let i = 0; i < a; i++){
            let n = (Math.random() * 0xfffff * 1000000).toString(16)
            let t = n.slice(0,6)
            t = '#' + t
            l.push(t)
        }
    return l
    }
}
console.log(generateColors('hexa', 3))
console.log(generateColors('rgb', 3))

function shuffleArray(arr){
    let b = []
    let c = []
    while(b.length < arr.length){
        let a = Math.floor(Math.random() * arr.length)
        if(!c.includes(a)){
            b.push(arr[a])
            c.push(a)
        }
    }
    console.log(b)
}
let ar = [1,2,3,4,5,6]
shuffleArray(ar)

function factorial(n){
    if (n == 0 || n == 1)
        return 1
    
    return n * factorial(n - 1)
}
console.log(factorial(5))

function isEmpty(a){
    if(a == 0)
        return true
    return false
}
let arr = []
console.log(isEmpty(arr))

function sum(){
    let sum = 0
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
console.log(sum(1,2,3,4,5,6))