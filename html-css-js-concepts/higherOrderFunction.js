function add (a, b) {
    return a+b;
}

let multiply = function (a, b) {
    return a*b;
}

function sub (a, b) {
    return a-b;
}

function divide (a, b) {
    return a/b;
}

//func takes another func as arg 
// Higher order function
let calc = function (n1, n2, callback) {
    let val = callback(n1, n2); //return 11
    return val;
}

//callback calc func add func is passed as arg
let result = calc(5, 6, add);
// calc(5, 6, 3)

console.log(result); //11
