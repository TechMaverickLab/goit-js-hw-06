document.addEventListener('DOMContentLoaded', () => {
	const categories = document.querySelectorAll('#categories .item');

	console.log(`Number of categories: ${categories.length}`);

	categories.forEach((category) => {
		const title = category.querySelector('h2').textContent;
		const items = category.querySelectorAll('ul > li');
        
		console.log(`\nCategory: ${title}\nElements: ${items.length}`);
	});
});
