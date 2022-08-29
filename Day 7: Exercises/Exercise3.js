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