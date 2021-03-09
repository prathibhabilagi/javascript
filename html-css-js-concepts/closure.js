//Clouser Example add(2)(3) => 5

var add = function(x) {
    return function(y) { 
        return console.log(x + y);
    };
}

add(2)(3); //5
