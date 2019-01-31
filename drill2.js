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

function rockPaperScissors(num) {

// rock = 1, paper = 2, scissors = 3

    if (num > 3 || num < 1) {
        throw Error;
    }
    const randomNo = Math.floor(Math.random() * 3) + 1;

    if (num === randomNo) {
        return 'Tie! Throw again.';
    }
    
    if (num === 1 && randomNo === 2) {
        return 'Paper covers rock. You lose.';
    }
    if (num === 1 && randomNo === 3) {
        return 'Rock beats scissors. You win!';
    }

    if (num === 2 && randomNo === 3) {
        return 'Scissors cuts paper. You lose.'
    }
    if (num === 2 && randomNo === 1) {
        return 'Paper covers rock. You win!';
    }
    
    if (num === 3 && randomNo === 1) {
        return 'Rock breaks scissors. You lose.';
    }
    if (num === 3 && randomNo === 2) {
        return 'Scissors cut paper. You win!';
    }
}