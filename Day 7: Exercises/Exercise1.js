function fullName(){
    let firstName = 'Abel'
    let lastName = 'Zeleke'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}

fullName()

function fullName1(fName, lName){
    return fName + ' ' + lName
}
console.log(fullName1('Abel', 'Zeleke'))

function addNumbers(num1, num2){
    let sum = num1 + num2
    return sum
}
console.log(addNumbers(9, 8))

function areaOfRectangle(length, width){
    let area = length * width
    return area
}
console.log(areaOfRectangle(2, 3))

function perimeterOfRectangle(lenght, width){
    let perimeter = 2 * (lenght + width)
    return perimeter
}
console.log(perimeterOfRectangle(5, 4))

function volumeOfRecPism(length, width, height){
    let vol = length * width * height
    return vol
}
console.log(volumeOfRecPism(4,3,5))

function areaOfCircle(r){
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(2))

function circumOfCircle(r){
    let circumfrance = 2 * Math.PI * r
    return circumfrance
}
console.log(circumOfCircle(4))

function density(mass, volume){
    let density = mass / volume
    return density
}
console.log(density(55.2, 30))

function speed(totalDistance, totalTime){
    let speed = totalDistance / totalTime
    return speed
}
console.log(speed(15, 3))

function weight(mass){
    const graviy = 9.81
    let weight = mass * graviy
    return weight
}
console.log(weight(55))

function convertCelsiusToFahrenheit(oC){
    let oF = (oC * 9/5) + 32
    return oF
}
console.log(convertCelsiusToFahrenheit(37))

function bmi(weight, height){
    let bmi = weight / (height ** 2)
    return bmi
}
console.log(bmi(55, 1.68))

function checkSeason(month){
    if(month == 'December' || month == 'January' || month == 'February'){
        return 'Winter'
    } else if(month == 'March' || month == 'April' || month == 'May'){
        return 'Spring'
    } else if(month == 'June' || month == 'July' || month == 'August'){
        return 'Summer'
    } else if (month == 'September' || month == 'October' || month == 'November'){
        return 'Autumn'
    } else{
        return 'Enter a correct Month'
    }
}
console.log(checkSeason('May'))

function findMax(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1
    } else if (num3 > num2 && num3 > num1){
        return num3
    } else{
        return num2
    }
}
console.log(findMax(10,5,19))