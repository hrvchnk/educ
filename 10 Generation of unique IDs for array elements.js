// Дані: Масив об'єктів без id.
// Завдання: Напишіть функцію, яка додає унікальний id кожному об'єкту в масиві.

array = [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Cherry' }];

function addUniqueId(array) {
	array.forEach((obj, index) => {
		obj.id = index + 1;
	});
}
addUniqueId(array);
console.log(array); // Output: myValue
