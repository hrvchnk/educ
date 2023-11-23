// Агрегація даних з масиву об'єктів:
// Дані: Масив об'єктів, де кожен об'єкт містить поля category та value.
// Завдання: Напишіть функцію, яка агрегує значення value по кожній категорії.

arrayOfObjects = [
	{ category: 'Fruits', value: 30 },
	{ category: 'Vegetables', value: 20 },
	{ category: 'Fruits', value: 25 },
	{ category: 'Vegetables', value: 10 },
	{ category: 'Fruits', value: 5 },
];

function sumOfObjects(array, display) {
	let sumOfFruits = 0;
	let sumOfVegetables = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i].category === 'Fruits') {
			sumOfFruits += array[i].value;
		} else array[i].category === 'Vegetables';
		{
			sumOfVegetables += array[i].value;
		}
	}
	display({ Fruits: sumOfFruits, Vegetables: sumOfVegetables });
}
function display(data) {
	console.log(data);
}

sumOfObjects(arrayOfObjects, display);
