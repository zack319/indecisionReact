// arguments object - no longer bound

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(51, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Zakaria',
    cities: ['Pawtucket', 'Providence', 'Boston'],
    printPlacesLived() {
        //can transform each item
       return  this.cities.map((city) => this.name + ' has lived in ' + city);

        return cityMessages;
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numers: [5, 10, 3],
    multiplyBy: 4,
    multiply() {
        return this.numers.map(number => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());