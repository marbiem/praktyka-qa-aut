function reduceExample2() {
  const numbers = [15.5, 2.3, 1.1, 4.7];

  const newArr = numbers.reduce(getSum, 0);

  function getSum(total, num) {
    console.log(total);
    console.log(num);
    console.log(total - num);
    console.log("---");

    return total + Math.round(num);
  }
}

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());
