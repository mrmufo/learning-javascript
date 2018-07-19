/**************************
* Variables and data types
*/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

/**************************
* Variable mutation and type corection
*/
/*

var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// Variable mutation

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/**************************
* Basic operators
*/
/*
var year, yearJohn, yearMark;
year = 2018;
ageJohn = 28;
ageMark = 33;

//Math operations
yearJohn = year - 28;

console.log(yearJohn);
console.log(year + 2);
console.log(year * 2);
console.log(year / 10);

//Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/
/**************************
* Operator precendence
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
*/

/**************************
* Challenge
*/
/*
var massMark = 80;
var heightMark = 1.83;
var massJohn = 72;
var heightJohn = 1.73;
var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);
var isHigher = bmiMark > bmiJohn;
console.log('Mark\'s BMI: ' + bmiMark);
console.log('John\'s BMI: ' + bmiJohn);
console.log('Is Mark\'s BMI higher?' + isHigher);
*/

/**************************
* If/else statements
*/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' isn\'t married yet');
}

var isMarried = false;

if (isMarried === true) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' isn\'t married yet');
}

var massMark = 80;
var heightMark = 1.83;

var massJohn = 76;
var heightJohn = 1.73;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);
if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher: ' + bmiMark + ' > ' + bmiJohn);
} else {
    console.log('John\'s BMI is higher: ' + bmiJohn + ' > '+ bmiMark);
}
*/

/**************************
* Boolean logic 
*/

/*
var firstName = 'John';
var age = 26;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/**************************
* The Ternary Operator and Switch Statements
*/

/*
var firstName = 'John';
var age = 18;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log('John drinks ' + drink + '.');

//Switch statement
var job = 'designer';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teach kids at school.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Bristol.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

/**************************
* Truthy and Falsy values and equality operators
*/

// falsy: undefined, null, 0, '', NaN
// truthy: NOT falsy values

/*
var height;

height = 23;

//Checking if variable is defined
if (height || height === 0) {
    console.log('Variable is defined.');
} else {
    console.log('Variable has NOT been defined.');
}

//Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
}
*/

/**************************
* Challenge 2
*/
/*
var averageTeamJohn = 86 + 120 + 133;
var averageTeamMike = 116 + 94 + 123;
var averageTeamMary = 97 + 134 + 102;


if (averageTeamJohn > averageTeamMike) {
    console.log('John\'s team won with the average of ' + averageTeamJohn + ' > ' + averageTeamMike);
} else if (averageTeamJohn < averageTeamMike) {
    console.log('Mike\'s team won with the average of ' + averageTeamMike + ' > ' + averageTeamJohn);
} else {
    console.log('Draw!');
}
*/

/*
if (averageTeamJohn > averageTeamMike && averageTeamJohn > averageTeamMary) {
    console.log('John\'s team won with the average of ' + averageTeamJohn + ' > ' + averageTeamMike + ', ' + averageTeamMary);
} else if (averageTeamMike > averageTeamJohn && averageTeamMike > averageTeamMary) {
    console.log('Mike\'s team won with the average of ' + averageTeamMike + ' > ' + averageTeamJohn + ', ' + averageTeamMary);
} else if (averageTeamMary > averageTeamJohn && averageTeamMary > averageTeamMike) {
    console.log('Mary\'s team won with the average of ' + averageTeamMary + ' > ' + averageTeamJohn + ', ' + averageTeamMike);
} else if (averageTeamJohn === averageTeamMike) {
    console.log('Draw ' + averageTeamJohn);
} else if (averageTeamJohn === averageTeamMary) {
    console.log('Draw ' + averageTeamJohn);
} else {
    console.log('Draw ' + averageTeamMike);
}
*/

/**************************
* Functions
*/
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/**************************
* Function Statements and Expressions
*/

/*
// Function declaration
// function WhatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Bristol';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/**************************
* Arrays
*/

/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/**************************
* Challenge 3
*/

/*
var bills = [124, 48, 268];

var calculateTip = function(bill) {
    var tip = 0;
    if (bill < 50) {
        tip = .2 * bill;
    } else if (bill >= 50 && bill < 200) {
        tip = .15 * bill;
    } else {
        tip = .1 * bill;
    }
    return tip;
}

var tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];
var amountPaid = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, amountPaid);
*/

/**************************
* Objects and properties
*/

/*
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// New object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/**************************
* Objects and methods
*/

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);









































