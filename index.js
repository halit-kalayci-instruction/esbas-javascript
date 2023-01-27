console.log("Hello World");

// Fonksiyon oluşturma


function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));

// Arrow functions
let sumArrow = (a, b) => {
    return a + b;
}
console.log(sumArrow(5, 10))

var sumArrow2 = function (a, b) {
    return a + b;
}
console.log(sumArrow2(2, 8));

// var vs let
// scope

function varScoping() {
    var x = 1;
    if (true) {
        // if scope
        var x = 2;
        console.log(x);
    }
    console.log(x);
}
function letScoping() {
    let x = 1;
    if (true) {
        // if scope
        let x = 2;
        console.log(x);
    }
    console.log(x);
}
console.log("********");
varScoping();
console.log("********");
letScoping();


function nestedScopeTest() {
    if (true) {
        var variable1 = 1;
        let variable2 = 2;
    }
    console.log(variable1);
}
console.log("**** Nested Scope Test ****")
nestedScopeTest();

const PI = 3.14;
console.log(PI);
// PI = 25;
// console.log(PI);

// let, const
// var => unut


// REST PARAMETER

function sumNumbers(...params) {
    let sum = 0;
    for (let param of params) {
        sum += param;
    }
    return sum;
}

console.log(sumNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9))
console.log(sumNumbers(1, 2))
console.log(sumNumbers(1, 2, 4))

//

// Default Parameter

function defaultParameter(x, y = 5) {
    return x + y;
}
console.log(defaultParameter(5));
//

// Destructuring 
// []
// {}
// [10,20,30,40] => a,b
// a = x[0], b=x[1]
let a, b, c, d;
[a, b, c, d] = [10, 20, 30, 40]
console.log(a, b, c, d);

// immutable
// redux => {cartItemsCount:1, userAuthenticated:true}
let object = { cartItemsCount: 1, userAuthenticated: true }
let { userAuthenticated } = object;
userAuthenticated = false;
console.log(userAuthenticated);

// ... 
let myArray = [10, 20, 30, 40];
console.log("************")
console.log(myArray);
console.log(...myArray)
console.log({ ...object, userAuthenticated: false, deneme: 123 })
// 

let x, y, rest;
[[...rest], a, b] = [[30, 40, 50], 10, 20];
console.log(rest);

// 10.15