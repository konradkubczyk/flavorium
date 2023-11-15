import { recipeStore } from "../../stores.ts";

class Recipe {
    name?: string;
    description?: string;
    ingredients?: string[];
    steps?: string[];
    isVegan?:boolean;
    type?:string;
    subType?:string;
}

const recipeData = new Recipe();

function handleSubmit() {
    console.log(recipeData.name);
    recipeStore.update(arr => [...arr, recipeData]);
    
}

export { recipeData, handleSubmit }
