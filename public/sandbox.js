"use strict";
/** @format */
let greet;
greet = () => {
    console.log("Hello World!");
};
const add = (a, b, c) => {
    // optional parameter typed with an ?, e.g. y?:number | string
    // const add = (a: number, b: number, c: number | string = 5) => { // To define a "default parameter" we can use a value like: y: number = 5. Furhtermore optional parameter are recommended to place at the end  of the other parameter list.
    console.log("👉 Line-11 ▶︎▶︎", a + b);
    console.log("👉 Line-12 ▶︎▶︎", "10");
    // this function returns nothing, that's why the fucntion type is "void", because in the future the function can return a number, a string, an object, etc. but in this moment it will return nothing.
};
add(7, 3);
const minus = (a, b) => {
    // this fn explicitly returns a number by contrast with the previous fn.
    return a - b;
};
minus(10, 3);
