// // let testTitle : string = "Week 1: Introduction to TypeScript";
// // let userName : string = "John Doe";
// // let password : string = "password123";
// // let isValiedUser : boolean = true;
// // const expectedMessage : string = "Welcome to TypeScript!";

// // console.log(testTitle,userName, isValiedUser,expectedMessage)



//     // Exercise 2 — Working with numbers
//     // Write an arrow function called calculateDiscountPrice that:
//     // Takes one parameter: price (number)
//     // Takes a second parameter: discountPercent (number)
//     // Returns a number
//     // Returns the price after discount, e.g. price = 100, discountPercent = 20 → returns 80
 
//     function  calculateDiscountPrice  (price: number , discountPercent : number) : number { 
//         return price - (discountPercent/100 * price)  ;
//     };
//     console.log(calculateDiscountPrice(1000, 40))



// //     Declare 5 typed variables representing one test case from Section 1 on the practice site (title, username, password, a boolean for whether it should succeed, and the expected message text).
// // Write a function calculatePassRate(passed: number, total: number): number and call it with two sample numbers.
// // Run the file and paste me the console output.

// // let title : string = "Login Test"
// // const name : string = " Test"
// // let password : string = "password123"
// // const  email : string = "john.doe@example.com"
// // let phoneNumber : number = 1234567890
// // let bio : string = "This is a sample bio for the user."


// function calculatePassRate(passed: number , total : number) : number {
//     return 100*(passed /total) ;

// }

// console.log(calculatePassRate(70, 100))




// // Go to Section 1 (Basic Form Elements) on the practice site and write 3 test case objects in an array
// //       — one valid submission, two invalid 
// //      (pick real invalid scenarios based on what the form actually validates).
// // Loop through them with for...of and print each title with whether it's expected to pass or fail.
// // Bonus (try it, don't stress if it's tricky): 
// //          rewrite that same loop using .forEach() instead of for...of
// //           — they do the same thing but you'll see both styles in real code.


// let testCases = [
//   {
//     title: "Valid signup",
//     name: "John Doe",
//     password: "password123",
//     email: "john.doe@example.com",
//     phoneNumber: "2565551562",
//     shouldSucceed: true,
//     expectedMessage: "Account created successfully"
//   },
//   {
//     title: "Invalid email format",
//     name: "#$%^&*",
//     password: "      ",
//     email: "invalidemail.com",
//     phoneNumber: "1234567892",
//     shouldSucceed: false,
//     expectedMessage: "Please enter a valid email"
//   },
//   {
//     title: "Malformed name and phone",
//     name: "12345678",
//     password: "{}!@#$%^&*()_",
//     email: "invalidemai",
//     phoneNumber: "44444444444000000020",
//     shouldSucceed: false,
//     expectedMessage: "Invalid input"
//   }
// ];

// for (const test of testCases) {
//   if (test.shouldSucceed) {
//     console.log(`${test.title}: expected to PASS`);
//   } else {
//     console.log(`${test.title}: expected to FAIL — "${test.expectedMessage}"`);
//   }
// }

// Your task: rewrite your testCases array with an explicit 
// TestCase interface applied, deliberately break one field's type (like you did before), 
// run npx tsc, and paste the actual error message TypeScript gives you. 
// Seeing that error on purpose, 
// understanding it, is the real goal here — then we move to classes.

interface TestCase {
  title: string;
  name: string;
  password: string;
  email: string;
  phoneNumber: string;
  shouldSucceed: boolean;
  expectedMessage: string;
}

let TestCases: TestCase[] = [
  {
    title: "Valid signup",
    name: "John Doe",
    password: "password123",
    email: "john.doe@example.com",
    phoneNumber: "2565551562",
    shouldSucceed: true,
    expectedMessage: "Account created successfully"
  },
  {
    title: "Invalid email format",
    name: "#$%^&*",
    password: "      ",
    email: "invalidemail.com",
    phoneNumber: "1234567892",
    shouldSucceed: false,
    expectedMessage: "Please enter a valid email"
  }
];


{
    title: "Broken test case",
    name: "Test User",
    password: "test123",
    email: "test@example.com",
    phoneNumber: "1112223333",
    shouldSucceed: "yes",
    expectedMessage: "This should error"
  }

  let TestCases: TestCase[] = [
  { title: "Valid signup", ... },
  { title: "Invalid email format", ... },
  {
    title: "Broken test case",
    name: "Test User",
    password: "test123",
    email: "test@example.com",
    phoneNumber: "1112223333",
    shouldSucceed: "yes",
    expectedMessage: "This should error"
  }
];