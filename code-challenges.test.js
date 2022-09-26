// ASSESSMENT 2: Coding Practical Questions with Jest

// const { it } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

//First, I install dependencies and run a command yarn add jest
//use a describe statement:
// use a describe method that takes an object as an argument
// describe ("divisibleByThree", () => {})
//next, I use it statement which is nested inside describe block, to describe what the test is doing. 
// it("evaluates, decides and return a string if number is divisible by three or not, () => {})
//next, I use expect statement to call the function and matcher method .toEqual.
//.toEqual contains the expected output of the function. It compare the actual output to the output in the test
//to run the tesy I use yarn jest command in the terminal

// describe("divisibleByThree", () => {
//     it("return a string if number is divisible by three or not",  () => {
//         expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
//         expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
//         expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
//     })
//   })
// //Result - > ReferenceError: divisibleByThree is not defined

// b) Create the function that makes the test pass.
//declare a function called divisibleByThree that takes an object as an argument
// one parameter (object)
//wright a conditional statement to evaluate if obgect number is evenly divisible by three -> return "15 is divisible by three" and "0 is divisible by three"
//if not -> return "-7 is dnot ivisible by three"

// const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

// const divisibleByThree = (object) => {
//     if (object.number % 3 === 0){
//         return `${object.number} is divisible by three` 
//     } else if (object.number === 0) {
//         return `${object.number} is divisible by three` 
//     } else if (object.number % 3 !== 0){
//         return `${object.number} is not divisible by three` 
//     } else {
//         return "Ooops"
//     }
// }

//PASS
//Test Suites: 1 passed, 1 total


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

//use a describe statement:
// use a describe method that takes an argument of an array
// describe ("capitalized", () => {})
//next, I use it statement which is nested inside describe block, to describe what the test is doing. 
// it("takes in an array of words and returns an array with all the words capitalized.", () => {})
//next, I use expect statement to call the function and matcher method .toEqual.
//.toEqual contains the expected output of the function. It compare the actual output to the output in the test
//to run the tesy I use yarn jest command 

// describe ("capitalized", () => {
//     it("takes in an array of words and returns an array with all the words capitalized.", () => {
//         expect(capitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         expect(capitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//     })
// })

// FAIL -> ReferenceError: capitalized is not defined

// b) Create the function that makes the test pass.

//declare a function called capitalized that takes an array as an argument
// use .map() method to iterate thopugh the array
//return the array outputfrom the map action
//access the first index of each value and convert it to uppercase using .toUpperCase() method
//use + to concattenate the rest of the word

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// const capitalized = (array) => {
//     return array.map((value) => {
//         return value[0].toUpperCase() + value.substring(1)
//     })

// }

//PASSED -> Test Suites: 1 passed, 1 total

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

//use a describe statement:
// use a describe method that takes an argument of a sting
// describe ("indexOfFirstVowel", () => {})
//next, I use it statement which is nested inside describe block, to describe what the test is doing. 
// it("takes in a string and logs the index of the first vowel", () => {})
//next, I use expect statement to call the function and matcher method .toEqual.
//.toEqual contains the expected output of the function. It compare the actual output to the output in the test
//to run the tesy I use yarn jest command 

describe("indexOfFirstVowel", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        expect(indexOfFirstVowel(vowelTester1)).toEqual(1)
        expect(indexOfFirstVowel(vowelTester2)).toEqual(0)
        expect(indexOfFirstVowel(vowelTester3)).toEqual(2)

    })
})
//FAIL ->  ReferenceError: indexOfFirstVowel is not defined

// b) Create the function that makes the test pass.

//declare a function called indexOfFirstVowel that takes a string as an argument
// use for loop to iterate though the string and check the values of each index
//use conditional statement if and OR operator to check if it contains a vowel, if so then return an index of the first vowel

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

const indexOfFirstVowel = (str) => {
    for (i = 0; i < str.length; i++) {
        if (
            str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u"
        ) {
            return i
        }
    }
}
//PASS -> Test Suites: 1 passed, 1 total

//I was also trying to figure out how to do it using .filter(). I believ I the string shoulb be converted to an array first. But then I was so confused and decided to use a fore loop and if statement

