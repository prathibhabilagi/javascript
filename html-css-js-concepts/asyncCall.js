function f1() {
    setTimeout(function () {
        console.log("f1 is starting");
        console.log("f1 is ending");
    }, 1000);
}
function f2() {
    console.log("f2 is starting");
    f1();
    console.log("f2 is ending");
}
f2();

//Output
// f2 is starting
// f2 is ending
// f1 is starting
// f1 is ending
