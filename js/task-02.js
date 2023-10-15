const ingredientsList = document.getElementById('ingredients');

const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const elements = ingredients.map((ingredient) => {
	const li = document.createElement('li');
	li.textContent = ingredient;
	li.classList.add('item');
	return li;
});

ingredientsList.append(...elements);
