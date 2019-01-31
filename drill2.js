let jediName = function(firstName, lastName) {
    return lastName.slice(0, 2) + firstName.slice(0, 1);
};

function beyond(num) {
    if (num !== 0) {
        console.log('And beyond');
    }

    if (num > 0) {
        console.log('To infinity');
    }

    if (num < 0) {
        console.log('To negative infinity');
    }

    if (num === 0) {
        console.log('Staying home');
    }
}

function decode(string) {
    let newArr = string.split(' ');
    let newStr = '';

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i][0] === 'a') {
            newStr += newArr[i][1];
        } else if (newArr[i][0] === 'b') {
            newStr += newArr[i][2];
        } else if (newArr[i][0] === 'c') {
            newStr += newArr[i][3];
        } else if (newArr[i][0] === 'd') {
            newStr += newArr[i][4];
        } else {
            newStr += ' ';
        }
    }

    return newStr;
}

function daysInMonth(month, leapYear) {
    let febDays = 28;
    if (leapYear) {
        febDays = 29;
    }
    switch (month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            return `${month} has 31 days.`;
            break;

        case 'February':
            return `${month} has ${febDays} days.`;
            break;

        case 'April':
        case 'June':
        case 'September':
        case 'November':
            return `${month} has 30 days.`;
            break;

        default:
            return `Must provide a valid month.`;
    }
}