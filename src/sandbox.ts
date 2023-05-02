/** @format */

type StringOrNum = string | number; //Union Type as an Alias.
type ObjWithName = { name: string; uid: StringOrNum }; // Here we chained the type of the "uid" property equals to an Uniontyped value.

const logDetails = (uid: String, item: string) => {
	console.log("👉 Line-6 ▶︎▶︎", `${item} has an id of: ${uid}`);
};

const greet = (user: ObjWithName) => {
	console.log("👉 Line-10 ▶︎▶︎", `${user.name} says hello`);
};
const greetAgain = (user: ObjWithName) => {
	console.log("👉 Line-10 ▶︎▶︎", `${user.name} says hello`);
};
