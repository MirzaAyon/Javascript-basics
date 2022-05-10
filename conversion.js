//addition of 2 string
var firstName = 'jennie';
var lastName = 'Kim';
// var fullName = firstName + lastName;
// var fullName = firstName + '' + lastName;
var fullName = firstName + ' ' + lastName;
// console.log(fullName);

var onionPrice = '42';
var eggPrice = '41';
//ekta number ekta string dileo same result ashbe
var totalPrice = onionPrice + eggPrice;
console.log(totalPrice);

//integer 

var sunglass = 3;

//float 

var price = 99.99;

//convert into integer
var onionPrice = '42';
// var onionPrice = '42.50';  2 khetrei same output ashbe 
// .50 ta ignore hoye jabe 
var eggPrice = '41.33';
var onionPriceNumber = parseInt(onionPrice);
console.log(onionPriceNumber);
var eggPriceNumber = parseFloat(eggPrice);
console.log(eggPriceNumber);
console.log(eggPriceNumber + onionPriceNumber);
//difference beween parseFloat and parseInt
//shamne + sign diyeo shongkha podhoti change kora jae ja pore janbo



