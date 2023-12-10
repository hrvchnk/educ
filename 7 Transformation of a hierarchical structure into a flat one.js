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

function flattenObject(obj, parentKey = '') {
	return [].concat(
		...Object.entries(obj).map(([key, value]) => {
			const currentKey = parentKey ? `${parentKey}.${key}` : key;
			return value instanceof Object
				? flattenObject(value, currentKey)
				: { [currentKey]: value };
		})
	);
}

// function flattenObject(obj, parentKey = '') {
// 	const flatArray = [];

// 	for (const key in obj) {
// 		if (obj.hasOwnProperty(key)) {
// 			const currentKey = parentKey ? `${parentKey}.${key}` : key;
// 			const value = obj[key];

// 			if (value instanceof Object) {
// 				flatArray.push(...flattenObject(value, currentKey));
// 			} else {
// 				flatArray.push({ [currentKey]: value });
// 			}
// 		}
// 	}

// 	return flatArray;
// }

const flatArray = flattenObject(hierarchicalStructure);
console.log(flatArray);
