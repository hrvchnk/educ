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

function whatIsTheSame(array, array, display) {
	display(array.name);
}

function display(data) {
	console.log(data);
}

whatIsTheSame(firstArray, secondArray, display);
