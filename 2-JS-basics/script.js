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













    
    
    
    
    



















