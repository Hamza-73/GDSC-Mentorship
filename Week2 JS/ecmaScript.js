//1. Object Destructuring 

const object = {
    name : 'HI',
    rollNo : '007',
    age: 25,
}

// new method
const { name , rollNo , age } = object;

console.log('name is ', name)
console.log('rollNo is ', rollNo)
console.log('age is ', age)

//2. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

//3. Rest Operator
//The rest operator allows you to collect the remaining elements into a new array or object
const sum = (a, b, ...rest) => {
    console.log(rest); // Output: [3, 4]
    return a + b;
  };
  
  console.log(sum(1, 2, 3, 4)); // Output: 3  

//4. Arrow Function
//   Arrow functions provide a more concise syntax for writing functions.
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

//5. Nullish coalescing operator
const value = null;
const result = value ?? 'default';
console.log(result); // Output: 'default'

//6. Optional chaining operator
// ?. allows you to safely access nested properties without causing errors if an intermediate property is null or undefined
const user = { address: { street: 'Gulberg 3' } };
const street = user?.address?.street;
console.log(street); // Output: 'Gulberg 3'

//7. var let const

// var vs let vs const 

// var declares globally scoped variables, values can be re-assigned
// let declares blocked scoped variables, values can be re-assigned
// const declares blocked scoped variables, functions. The values of the variables and the defination of functions cannot be re-assign

{
    var var1 = 30;
    let var2 = 50;
}
{
    console.log(var1); // 5 becuase global 
    console.log(var2); // Throws an error because not global
}

const a = 5; // cannot be changed
a = 10 ; // error

//8.  Trailing commas
const numbers = [
    1,
    2,
    3, // Trailing comma
  ];
  
  const person = {
    name: 'John',
    age: 30, // Trailing comma
  };
  