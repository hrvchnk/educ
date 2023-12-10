// Виконання глибокого клонування об'єкта:
// Дані: Об'єкт з вкладеними об'єктами та масивами.
// Завдання: Напишіть функцію для глибокого клонування цього об'єкта.

const originalObject = {
	name: 'John Doe',
	address: {
		street: '123 Main St',
		city: 'Anytown',
		contacts: { phone: '123-456-7890', email: 'john@example.com' },
	},
};

function deepClone(obj) {
	if (obj === null || typeof obj !== 'object') {
		// Якщо це не об'єкт або null, повертаємо сам об'єкт
		return obj;
	}

	if (obj instanceof Date) {
		// Обробка об'єктів типу Date
		return new Date(obj);
	}

	if (obj instanceof RegExp) {
		// Обробка об'єктів типу RegExp
		return new RegExp(obj);
	}

	// Створюємо новий об'єкт або масив залежно від типу obj
	const clone = Array.isArray(obj) ? [] : {};

	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			// Рекурсивно викликаємо deepClone для кожного властивості об'єкта
			clone[key] = deepClone(obj[key]);
		}
	}

	return clone;
}
const clonedObject = deepClone(originalObject);

console.log(clonedObject);
