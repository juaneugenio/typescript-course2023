/** @format */
const me = {
    name: "Juan",
    age: 35,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("👉 Line-17 ▶︎▶︎", amount);
        return amount;
    },
};
console.log("👉 Line-22 ▶︎▶︎", me);
me.speak("hello there");
let greetPerson = (hombre) => {
    console.log("👉 Hello", hombre.name);
};
greetPerson(me);
import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice("Tyler", "work on the website", 300);
const invTwo = new Invoice("Luigi", "work on the server", 500);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => console.log(inv.client, inv.amount, inv.format()));
// from lesson 11
const form = document.querySelector(".new-item-form");
console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
