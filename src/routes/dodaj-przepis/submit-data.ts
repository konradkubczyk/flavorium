import { recipeStore } from "../../stores.ts";
import { get } from 'svelte/store';

class Recipe {
    name?: string;
    description?: string;
    ingredients?: string[];
    steps?: string[];
    isVegan?: boolean = false;
    type?: string;
    subType?: string;
}

const recipeData = new Recipe();

function handleSubmit() {
    console.log(recipeData.name);
    console.log("Przed update", get(recipeStore));
    recipeStore.update(arr => [...arr, structuredClone(recipeData)]);
    console.log("Po update", get(recipeStore));

}

export { recipeData, handleSubmit }
