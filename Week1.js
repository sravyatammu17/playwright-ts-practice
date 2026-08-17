"use strict";
// // let testTitle : string = "Week 1: Introduction to TypeScript";
// // let userName : string = "John Doe";
// // let password : string = "password123";
// // let isValiedUser : boolean = true;
// // const expectedMessage : string = "Welcome to TypeScript!";
Object.defineProperty(exports, "__esModule", { value: true });
let TestCases = [
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
//# sourceMappingURL=Week1.js.map