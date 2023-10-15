const input = document.getElementById('validation-input');
const validLength = parseInt(input.getAttribute('data-length'));

input.addEventListener('blur', () => {
	if (input.value.length === validLength) {
		input.classList.add('valid');
		input.classList.remove('invalid');
	} else {
		input.classList.add('invalid');
		input.classList.remove('valid');
	}
});
