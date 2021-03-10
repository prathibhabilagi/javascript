let obj = {
    name: 'foo',
    id: 10,
    addr: {
        city: 'bnglr',
        state: 'kar'
    }
};

//Retrieve City value using destructuring

let{addr:{city}} = obj;
console.log(city);
