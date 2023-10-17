document.addEventListener('DOMContentLoaded', () => {
	const categories = document.querySelectorAll('#categories .item');

	console.log(`Number of categories: ${categories.length}`);

	categories.forEach((category) => {
		const title = category.firstElementChild.textContent; // використання firstElementChild
		const items = category.lastElementChild.children; // використання lastElementChild
        
		console.log(`\nCategory: ${title}\nElements: ${items.length}`);
	});
});
