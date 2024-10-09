const citrus = ["Lemon", "Lime", "Orange"];
const fruits = ["Apple", ...citrus, "Banana", "Coconut"];
console.log(fruits);

const fullName = {
	firstName: "Cuong",
	lastName: "Tran",
};
const user = {
	...fullName,
	id: 1,
	username: "cuongtran",
};
console.log(user);
