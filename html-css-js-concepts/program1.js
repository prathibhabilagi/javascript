function Square(r) {
    this.area = function() {
        return r*r;
    }
}

var x = new Square(2);
area();

// Error -> ReferenceError: area is not defined
