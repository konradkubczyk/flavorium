// src/stores/myStore.ts
import { writable } from 'svelte/store';

interface Recipe {
	name?: string;
	description?: string;
	ingredients?: string[];
	steps?: string[];
	isVegan?: boolean;
	type?: string;
	subType?: string;
}

const recipeStore = writable(new Array<Recipe>());

export { recipeStore };
export type { Recipe };
