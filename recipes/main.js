import recipes from './recipes.js';

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomRecipe(List){
	const listLength = List.length;
	const randomRecipe = random(listLength);
	return List[randomRecipe];
}

function recipeTemplate(recipe) {
	return `<figure class="recipe">
	<img src="${recipe.image}" alt="${recipe.name}" />
	<figcaption>
		<div class="recipe-desc">
			<ul >
				${tagsTemplate(recipe.tags)}	
			</ul>
			<h1>${recipe.name}</h1>
		
			${ratingTemplate(recipe.rating)}
			
			<p class="description">
				${recipe.description}
			</p>
		</div>
	</figcaption>
	</figure>`;
}

function tagsTemplate(tags) {
	let html = '';
    for (let i = 0; i < tags.length; i++) {
        html += `<li class="tag">${tags[i]}</li>`;
    }
	return html;
}

function ratingTemplate(rating) {
	
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`

	for (let i = 0; i < 5; i++){
		if (i < rating){
			html += `<span aria-hidden="true" class="icon-star">⭐</span>`
		}
		else {
			html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
		}
	}
	html += `</span>`
	return html
}

function renderRecipes(recipeList) {
	const recipeElement = document.getElementById('recipe');
	let html = ''; 
    recipeList.forEach(recipe => {
        html += recipeTemplate(recipe);
    });
	recipeElement.innerHTML = html;
}

function init() {
  const recipe = getRandomRecipe(recipes);
  renderRecipes([recipe]);
}

init();

document.getElementById('search-btn').addEventListener('click', searchHandler);

function searchHandler(e){
	e.preventDefault()
	const searchInput = document.getElementById('search-recipe').value;
	const lowerCaseInput = searchInput.toLowerCase();
	
	const sortedRecipes = filterRecipes(lowerCaseInput);
	renderRecipes(sortedRecipes)
}

function filterRecipes(query){
	const filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
        recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query))
    ).filter(recipe => recipe); 

	const sorted = filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));
	return sorted
}