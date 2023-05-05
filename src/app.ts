/** @format */

interface IsPerson {
	name: string;
	age: number;
	speak(a: string): void;
	spend(a: number): number;
}

const me: IsPerson = {
	name: "Juan",
	age: 35,
	speak(text: string): void {
		console.log(text);
	},
	spend(amount: number): number {
		console.log("👉 Line-17 ▶︎▶︎", amount);
		return amount;
	},
};

console.log("👉 Line-22 ▶︎▶︎", me);
me.speak("hello there");

let greetPerson = (hombre: IsPerson): any => {
	console.log("👉 Hello", hombre.name);
};

greetPerson(me);

import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice("Tyler", "work on the website", 300);
const invTwo = new Invoice("Luigi", "work on the server", 500);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => console.log(inv.client, inv.amount, inv.format()));

// from lesson 11
const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
	e.preventDefault();

	console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
