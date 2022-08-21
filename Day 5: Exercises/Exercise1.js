const a = []
const b = Array(6).fill(2)
console.log(b.length)
console.log(b[0], b[parseInt(b.length/2) - 1], b[b.length - 1])
let mixedDataTypes = [1,3.14,100, {'a':2}, 'Abel',(1,2,3)]
console.log(mixedDataTypes.length)

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0], itCompanies[parseInt(itCompanies.length)/2], itCompanies[itCompanies.length-1])
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])
itCompanies[0] = itCompanies[0].toUpperCase()
itCompanies[1] = itCompanies[1].toUpperCase()
itCompanies[3] = itCompanies[3].toUpperCase()
itCompanies[4] = itCompanies[4].toUpperCase()
itCompanies[5] = itCompanies[5].toUpperCase()
itCompanies[6] = itCompanies[6].toUpperCase()

console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])
console.log(itCompanies.join(),' are big it companies')

if(itCompanies.includes('IBM')){
    console.log('IBM')
}else{
    console.log('a company is not found')
}
//14? console.log(itCompanies[0].c)
itCompanies.sort()
itCompanies.reverse()

console.log(itCompanies.slice(3))
console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(3,4))
console.log(itCompanies.shift())
itCompanies.splice(3,1)
console.log(itCompanies)
console.log(itCompanies.pop())
itCompanies.splice()
console.log(itCompanies)