// Дані: Два масиви об'єктів, де кожен об'єкт має id.
// Завдання: Напишіть функцію, яка синхронізує вміст цих двох масивів за id.

const firstArray = [
	{ id: 1, name: 'Apple' },
	{ id: 2, name: 'Banana' },
];
const secondArray = [
	{ id: 2, name: 'Banana' },
	{ id: 3, name: 'Cherry' },
];

// 1 spread
function synchronizeArrays(arr1, arr2) {
	const synchronizedArray = [...arr1, ...arr2];

	return synchronizedArray;
}

// 2 map
function synchronizeArrays2(arr1, arr2) {
	const synchronizeArrays = arr1.map((item, index) => {
		return item + ' ' + arr2[index];
	});
	return synchronizeArrays;
}

// 3 forEach
function synchronizeArrays3(arr1, arr2) {
	arr1.forEach((item1, index) => {
		const matchingItemIndex = arr2.findIndex(item2 => item2.id === item1.id);

		if (matchingItemIndex !== -1) {
			arr2[matchingItemIndex] = { ...arr2[matchingItemIndex], ...item1 };
		}
	});

	return arr2;
}

//4 reduce
function synchronizeArrays4(arr1, arr2) {
	const synchronizedArray = arr1.reduce((result, item1, index) => {
		return result;
	}, []);
}

const result = synchronizeArrays(firstArray, secondArray);
const result2 = synchronizeArrays2(firstArray, secondArray);
const result3 = synchronizeArrays3(firstArray, secondArray);
const result4 = synchronizeArrays4(firstArray, secondArray);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
