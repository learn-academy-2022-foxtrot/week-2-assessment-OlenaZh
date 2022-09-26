# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer:
We add a parameter or parameters to our function ex. (iceCreamFlavour), but if we dont assign a value to the parameter with an argument, we will get undefined. We need to assign a value to the parameter with an argument.
const iceCreamOrder = (iceCreamFlavour) => {
  return `Your order is ${iceCreamFlavour} Ice Cream.`
}
console.log(iceCreamOrder("vanilla"))
//(iceCreamFlavour) - parameter
//("vanilla") - argument


Researched answer:

The difference between parameter and argement is that argument is a value/values that are declared within a function when the function is called. But parameter is a varuiable/variables that are difined when function is diclared. 
Variable, when function is diclared -> (parameter)
Value, when function is called -> (argument)

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer:
The JavaScript built in method .map() has three built-in parameters: value, index. and the array. The value is required, index and array are optional. 

Researched answer:

Value is a required parameter and it holds the value of current element. 
Optional parameters are index - index of array at the current iteration, 
and array.

3. What is the difference between map and filter?

Your answer:
The difference between .map() and filter.() is that .map() will return then array of the same length as the original array. The value can be different, but the length will be the same. 
The .filter() will return a new array and only the value that meet the requested condition. The length of the new/ returned array can be different than the length of the original array. 

Researched answer:
While both .map() and .filter() iterate through every element in an array, .map() returs modifide/ new array with new values, but the same length as an original array. And .filter() returns new array, but only the elements that create a logical "true" on the condition priovided in filter()
.map() is great for modifying or displaying each item . 
.filter() has a built in if statement. 

4. What is iteration?

Your answer:

Iteration is a looping through each element and performing the same action untill condition is met.

Researched answer:
Iteration is a repeating a process untill condition is met. Then result of one iteration are used as the starting point for the next iteration. For example, we use iteration in for loop and  while loop.

5. What is the difference between a class and an object?

Your answer:

Object - it is collection of properties. You can create a new object using class. 
Class is a blueprint for object.
Object are collection of data that is storred in {key : value} pair.
The name of object usually in camelCase.
We use a key ord class to create a class. To name a class we use PascalCase.

Researched answer:
The class is a template for creating object and object is a member of class. 
Class is not an object.
With class we use constructor() method to initialize object/objects. When a new object is created, the constructor() method performed automaticaly.   

6. STRETCH: What is hoisting in JavaScript?

Your answer:

Researched answer:
Hoisting in JS is the default behaviour of moving all declaration at the top of the scope before code execution. 
It is a good practice to always declare all variables at the beginning of every scope, to avoid bugs.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories:
Short and informal description of task/ expected output for each step. 
A user story describes the type of user, wtat they want and why.

2. Spread operator:
We use it to copy all or part of an existiing array or object into another array or object.

3. React:
A java script library for building user interfaces. 

4. React props:
props stands for properties. It is used to pass data between components. 

5. DOM events:
DOM is a visual representation of your code. Event is an action that was performed to execute a JS code. 
Examples of events: 
- User clicks the mouse
- Web page is loaded
The mouse moves over an element
