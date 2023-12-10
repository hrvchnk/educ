// Дані: Об'єкт з вкладеними об'єктами (наприклад, дерево категорій).
// Завдання: Напишіть функцію, яка перетворює цю ієрархічну структуру в плоский масив об'єктів.

hierarchicalStructure = {
	Electronics: {
		Laptops: {
			Gaming: ['Laptop 1', 'Laptop 2'],
			Business: ['Laptop 3', 'Laptop 4'],
		},
		Phones: ['Phone 1', 'Phone 2'],
	},
	Clothing: {
		Men: ['Shirt 1', 'Shirt 2'],
		Women: ['Dress 1', 'Dress 2'],
	},
};

console.log(hierarchicalStructure);
function siteElements(array, newArray, numberOfElements) {
	let newArray = [];
	console.log(newArray);
}

siteElements(hierarchicalStructure, newArray);
