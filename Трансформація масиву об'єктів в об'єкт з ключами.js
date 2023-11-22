// Трансформація масиву об'єктів в об'єкт з ключами:
// Дані: Масив об'єктів, де кожен об'єкт має унікальний id та інші властивості.
// Завдання: Напишіть функцію, яка перетворює цей масив в об'єкт, де ключами є id, а значеннями - відповідні об'єкти.

const arrayOfObject = [
	{ id: 'a1', color: 'red', size: 'M' },
	{ id: 'b2', color: 'blue', size: 'S' },
];

console.log(arrayOfObject);

function idІsTheKeyOfTheObject(array, display) {
	const transformedObject = {};

	for (let i = 0; i < array.length; i++) {
		const currentObject = array[i];
		transformedObject[currentObject.id] = currentObject;
	}

	display(transformedObject);
}
function display(data) {
	console.log(data);
}

idІsTheKeyOfTheObject(arrayOfObject, display);
