// Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.

// Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

// Your code here.

class Vec{
    constructor(x, y){
        Vec.prototype.first = x;
        Vec.prototype.second = y;
    }
    plus() {
        d
    }
    minus() {
        d
    }
}
// Tests:
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

// For prototype
// https://www.programiz.com/javascript/prototype#:~:text=In%20JavaScript%2C%20every%20function%20and,checking%20the%20prototype%20value%20console.

// For constructor
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor