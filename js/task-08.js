const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
	event.preventDefault(); // Зупиняємо перезавантаження сторінки

	const { elements } = event.currentTarget;
	const email = elements.email.value;
	const password = elements.password.value;

	if (!email || !password) {
		alert('All fields should be filled out!');
		return;
	}

	const formData = {
		email,
		password
	};

	console.log(formData);

	loginForm.reset();
});

