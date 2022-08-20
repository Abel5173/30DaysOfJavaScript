// 1. Write a program which tells the number of days in a month.
let month = prompt('Enter a month: ')
switch(true){
    case month.toLowerCase() == 'January'.toLowerCase():
        console.log(`January has 31 days.`)
        break
    case month.toLowerCase() == 'February'.toLowerCase():
        console.log(`February has 28 days.`)
        break
    case month.toLowerCase() == 'March'.toLowerCase():
        console.log(`March has 31 days.`)
        break
    case month.toLowerCase() == 'April'.toLowerCase():
        console.log(`April has 30 days.`)
        break
    case month.toLowerCase() == 'May'.toLowerCase():
        console.log(`May has 31 days.`)
        break
    case month.toLowerCase() == 'March'.toLowerCase():
        console.log(`March has 31 days.`)
        break
    case month.toLowerCase() == 'June'.toLowerCase():
        console.log(`June has 30 days.`)
        break
    case month.toLowerCase() == 'July'.toLowerCase():
        console.log(`July has 31 days.`)
        break
    case month.toLowerCase() == 'August'.toLowerCase():
        console.log(`August has 31 days.`)
        break
    case month.toLowerCase() == 'September'.toLowerCase():
        console.log(`September has 30 days.`)
        break
    case month.toLowerCase() == 'October'.toLowerCase():
        console.log(`October has 31 days.`)
        break
    case month.toLowerCase() == 'November'.toLowerCase():
        console.log(`November has 30 days.`)
        break
    case month.toLowerCase() == 'December'.toLowerCase():
        console.log(`December has 31 days.`)
        break
}

// 2. Write a program which tells the number of days in a month, now consider leap year.
let leapMonth = prompt('Enter a Month: ')
switch(true){
    case leapMonth.toLowerCase() == 'January'.toLowerCase():
        console.log(`January has 31 days.`)
        break
    case leapMonth.toLowerCase() == 'February'.toLowerCase():
        if(new Date().getFullYear()%4 == 0)    {
            console.log(`February has 29 days.`)
        }else{
            console.log(`February has 28 days.`)
        }
        break
    case leapMonth.toLowerCase() == 'March'.toLowerCase():
        console.log(`March has 31 days.`)
        break
    case leapMonth.toLowerCase() == 'April'.toLowerCase():
        console.log(`April has 30 days.`)
        break
    case leapMonth.toLowerCase() == 'May'.toLowerCase():
        console.log(`May has 31 days.`)
        break
    case leapMonth.toLowerCase() == 'March'.toLowerCase():
        console.log(`March has 31 days.`)
        break
    case leapMonth.toLowerCase() == 'June'.toLowerCase():
        console.log(`June has 30 days.`)
        break
    case leapMonth.toLowerCase() == 'July'.toLowerCase():
        console.log(`July has 31 days.`)
        break
    case leapMonth.toLowerCase() == 'August'.toLowerCase():
        console.log(`August has 31 days.`)
        break
    case leapMonth.toLowerCase() == 'September'.toLowerCase():
        console.log(`September has 30 days.`)
        break
    case leapMonth.toLowerCase() == 'October'.toLowerCase():
        console.log(`October has 31 days.`)
        break
    case leapMonth.toLowerCase() == 'November'.toLowerCase():
        console.log(`November has 30 days.`)
        break
    case leapMonth.toLowerCase() == 'December'.toLowerCase():
        console.log(`December has 31 days.`)
        break
}