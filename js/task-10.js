const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', () => {
	const amount = parseInt(input.value);
	createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
	const elements = [];
	for (let i = 0; i < amount; i++) {
		const div = document.createElement('div');
		const size = 30 + i * 10;
		div.style.width = `${size}px`;
		div.style.height = `${size}px`;
		div.style.backgroundColor = getRandomHexColor();
		elements.push(div);
	}
	boxesContainer.append(...elements);
}

function destroyBoxes() {
	boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
