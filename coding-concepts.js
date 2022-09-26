// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Foxtrot 2022"
// console.log(cohort.split(""))

// // a) Your answer:
// ["F", "o","x","t","r", "o","t", " ", "2","0", "2","2"]
// b) Verify and explain:
// I was correct, because .split() method converts a string into array. And it also returns space as an " ", 

// --------------------2) What will this log?

// const greeter = (name) => {
//  `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer:
// It will log Hello, LEARN Student
// b) Verify and explain:
//I was wrong. Of course! The function does not have a return. Without a return a function will log undefined. How could I forget :)

// --------------------3) What will this log?

// const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
//console.log(multipliedByTwo)

// a) Your answer:
//[8, 10, 12, 14, 16]
// b) Verify and explain:
//My answer is correct, because .map() method iterate through the array and multiply each value by 2. It returns a new array of the same length.
//Since it is a one line of code, we can skip return keyword. 

// --------------------4) What will this log?

//const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer:
//[11, 13, 15]
// b) Verify and explain:
//And this is a correct answer, because .filter() method iterayes through the array and returns a new array of odds numbers only, since it meets the condition. 

// --------------------5) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer:
//JavaScript
// b) Verify and explain:
//My answer is correct. 
//we are dealing with Object here. And object consists of {key: value} 
//we access object properrty using a dot notation. We call the name of the object variable (myCodingSkills), then kye and value index. In our case value is an array 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:
//{student : "George", cohort: "Foxtrot", year : 2022}
// b) Verify and explain:
//Learn { student: 'George', cohort: 'Foxtrot', year: 2022 }
//we use class to create a new object. We pass a paramenter (name) that will be a key:value pair 


