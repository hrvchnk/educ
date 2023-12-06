// Дані: Масив об'єктів.
// Завдання: Напишіть функцію, яка приймає номер сторінки та кількість елементів на сторінці і повертає відповідний відрізок масиву.

arrayOfObjects = [
	'Item 1',
	'Item 2',
	'Item 3',
	'Item 4',
	'Item 5',
	'Item 6',
	'Item 7',
	'Item 8',
	'Item 9',
	'Item 10',
];

let page = 2;
let numberOfElements = 3;

function siteElements(array, page, numberOfElements) {
	let startIndex = (page - 1) * numberOfElements;
	let endIndex = startIndex + numberOfElements;

	let result = array.slice(startIndex, endIndex);

	console.log('page ' + page + ': ' + result.join(', '));
}

siteElements(arrayOfObjects, page, numberOfElements);
