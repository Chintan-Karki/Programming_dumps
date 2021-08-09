// Deep copy and shallow copy
const person1 = {
	name: "Chintan",
	address: {
		city: "Biratnagar",
		country: "Nepal",
	},
};
console.log(person1);

// shallow copy
const person2 = { ...person1 };

person2.name = "Apple";
person2.address.country = "America"; // This also changes the Country property in person1

console.log(person2);
console.log(person1);

// Deep copy
const person3 = { ...person1, address: { ...person1.address } };
