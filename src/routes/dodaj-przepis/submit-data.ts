import { recipeStore } from "../../stores.ts";

class Recipe {
    name?: string;
    description?: string;
    ingredients?: string[];
    steps?: string[];
}

const recipeData = new Recipe();

function handleSubmit() {
    recipeStore.update(arr => [...arr, recipeData]);
}

export { recipeData, handleSubmit }
