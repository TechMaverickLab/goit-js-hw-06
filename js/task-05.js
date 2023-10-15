const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

inputEl.addEventListener('input', (event) => {
	const value = event.target.value.trim();

	if (value === '') {
		outputEl.textContent = 'Anonymous';
	} else {
		outputEl.textContent = value;
	}
});
