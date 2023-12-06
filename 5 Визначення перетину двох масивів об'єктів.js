// Визначення перетину двох масивів об'єктів:
// Дані: Два масиви об'єктів, де кожен об'єкт має унікальний id.
// Завдання: Напишіть функцію, яка знаходить об'єкти, що присутні в обох масивах.

firstArray = [
	{ id: 1, name: 'Apple' },
	{ id: 2, name: 'Banana' },
];
secondArray = [
	{ id: 2, name: 'Banana' },
	{ id: 3, name: 'Cherry' },
];

function whatIsTheSame(array1, array2, display) {
	let commonElements = array1.filter(element1 => {
		return array2.some(element2 => element2.id === element1.id);
	});
	display(commonElements);
}

function display(data) {
	console.log(data);
}

whatIsTheSame(firstArray, secondArray, display);
