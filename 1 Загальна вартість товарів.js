// Обчислення загальної вартості товарів у кошику:
// Дані: Масив об'єктів, кожен з яких представляє товар з полями name, price, та quantity.
// Завдання: Напишіть функцію, яка обчислює загальну вартість товарів у кошику.
// Масив товарів:
// Обчислення загальної вартості товарів у кошику:
// Дані: Масив об'єктів, кожен з яких представляє товар з полями name, price, та quantity.
// Завдання: Напишіть функцію, яка обчислює загальну вартість товарів у кошику.

const arrayOfStaff = [
	{ name: 'Laptop', price: 800, quantity: 2 },
	{ name: 'Phone', price: 500, quantity: 1 },
	{ name: 'Headphones', price: 150, quantity: 4 },
];

function getMarketStaffData(staff, display) {
	let sumStaffPrice = 0;

	for (let i = 0; i < staff.length; i++) {
		sumStaffPrice += staff[i].price * staff[i].quantity;
	}

	display(sumStaffPrice);
}

function display(data) {
	console.log('Total Price:', data);
}

getMarketStaffData(arrayOfStaff, display);
