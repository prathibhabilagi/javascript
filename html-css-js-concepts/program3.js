var text = 'outside';
function logIt() {
    console.log(text);
    var text = 'inside';
};
logIt();

//Output -> undefined
