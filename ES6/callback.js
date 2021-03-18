function  a(callback) {
    setTimeout(() => {
        console.log("Result -> a()");
        callback();
    }, 5000);
}

function  b(callback) {
     setTimeout(() => {
        console.log("Result -> b()");
        callback();
    }, 5000);
}

function  c(callback) {
     setTimeout(() => {
        console.log("Result -> c()");
        callback();
    }, 2000);
}
a(() => {
    console.log("a() is done");
    b(() => {
        console.log("b() is done");
        c(() => {
            console.log("c() is done");
        });
    });
});
