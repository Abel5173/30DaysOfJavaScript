let g = prompt('Enter grade:')
switch(true){
    case g >= 80:
        console.log('A')
        break
    case g >=70:
        console.log('B')
        break
    case g >= 60:
        console.log('C')
        break
    case g >= 50:
        console.log('D')
        break
    default:
        console.log('F')
}

let mm = prompt('Enter month: ')
if(mm === 'September' || mm === 'November' || mm === 'October'){
    console.log('The season is Autumn.')
} else if(mm === 'December' || mm === 'January' || mm === 'February'){
    console.log('The season is Winter.')
}else if(mm === 'March' || mm === 'April' || mm === 'May'){
    console.log('The season is Spring.')
}else {
    console.log('The season is Summer.')
}

let day = prompt('What is the day today?')
switch(true){
    case day.toLowerCase() == 'Monday'.toLowerCase():
        console.log('Monday is a working day.')
        break
    case day.toLowerCase() == 'Tuesday'.toLowerCase():
        console.log('Tuesday is a working day.')
        break
    case day.toLowerCase() == 'Wendsday'.toLowerCase():
        console.log('Wendsday is a working day.')
        break
    case day.toLowerCase() == 'Thursday'.toLowerCase():
        console.log('Thursday is a working day.')
        break
    case day.toLowerCase() == 'Friday'.toLowerCase():
        console.log('Friday is a working day.')
        break
    case day.toLowerCase() == 'Saturday'.toLowerCase():
        console.log('Saturday is a weekend.')
        break
    case day.toLowerCase() == 'Sunday'.toLowerCase():
        console.log('Sunday is a weekend.')
        break
}