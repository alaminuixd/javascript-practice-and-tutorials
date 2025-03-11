/* 
*************** Method Chaining in JavaScript *******************
All the functions that return "this" act as a reflection of the parent object (calculator). Since an object can call its methods using the dot (.) operator, we can chain one method after another.
*/
const calculator = {
  value: 0,
  add(num) {
    this.value += num;
    return this;
  },
  subtract(num) {
    this.value -= num;
    return this;
  },
  multiply(num) {
    this.value *= num;
    return this;
  },
  getValue() {
    console.log(this.value);
    return this;
  },
};

calculator.add(5).subtract(2).multiply(3).getValue(); // Output: 9
