import { Ingredient, Recipe, Step } from '$lib/models/recipe.ts';
import { goto } from '$app/navigation';

export let isSubmitting = false;

export async function submitRecipe() {
	if (isSubmitting) return;
	isSubmitting = true;
	const res = await fetch(
		'https://cloud.appwrite.io/v1/databases/655bd832ea6f472b15d8/collections/655bd852b4a5ec1fd409/documents',
		{
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
				'X-Appwrite-Project': '6556209062be5c6ce4b0'
			},
			body: JSON.stringify({
				'documentId': 'unique()',
				'data': {
					...recipe,
					'ingredients': recipe.ingredients.filter(ingredient => ingredient.name !== null),
					'steps': recipe.steps.filter(step => step.description !== null)
				}
			})
		}
	);
	const data = await res.json();
	goto(`/przepis/${data.$id}`);
	isSubmitting = false;
	recipe = new Recipe();
}

export function refreshArrays() {
	if (recipe.ingredients[recipe.ingredients.length - 1].name) {
		recipe.ingredients.push(new Ingredient());
	} else if (recipe.ingredients.length > 1 && !recipe.ingredients[recipe.ingredients.length - 2].name) {
		recipe.ingredients.pop();
	}
	if (recipe.steps[recipe.steps.length - 1].description) {
		recipe.steps.push(new Step());
	} else if (recipe.steps.length > 1 && !recipe.steps[recipe.steps.length - 2].description) {
		recipe.steps.pop();
	}
}

export let recipe = new Recipe();
