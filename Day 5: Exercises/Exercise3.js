const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(Math.max(...ages))
let a = parseInt(ages.length/2)
if(ages.length%2 == 0){
    console.log((ages[a]+ages[a+1])/2)
} else{
    console.log(ages[a+1])
}
let b = (ages[0]+ages[1]+ages[2]+ages[3]+ages[4]
    +ages[5]+ages[6]+ages[7]+ages[8]+ages[9])/10
console.log(b)
let x = Math.max(...ages)
let y = Math.min(...ages)
console.log(x-y)
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
  undefined
  const v = countries.slice(0, 10)
  let t = Math.max(...v)
  let s = Math.min(...v)
  let avg = (v[0]+v[1]+v[2]+v[3]+v[4]
    +v[5]+v[6]+v[7]+v[8]+v[9])/10

    if(Math.abs(s-avg) > Math.abs(t-avg)){
        console.log('The former is greater than the latter')
    } else if(Math.abs(s-avg) == Math.abs(t-avg)){
        console.log('Equal')
    }else{
        console.log('The latter is greater than the former')
    }

if(countries.length%2 == 0){
    console.log((countries[parseInt(countries.length/2)], countries[parseInt(countries.length/2)+1])/2)
} else{
    console.log(countries[parseInt(countries.length/2)+1])
}
if(countries.length%2 == 0){
    console.log(countries.slice(0,parseInt(countries.length/2)), countries.slice(parseInt(countries.length/2),countries.length))
} else{
    console.log(countries.slice(0,parseInt(countries.length/2)), countries.slice(parseInt(countries.length/2+1),countries.length))
}

