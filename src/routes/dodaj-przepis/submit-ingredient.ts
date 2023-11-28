import { ingredientStore } from "../../stores.ts";
import {get,writable} from 'svelte/store';

class Ingredient {
    name?: string;
    amount?: string
}

const ingredientData = new Ingredient();

function handleSubmitIngredient() {
    console.log('ingredientData.name'); 
}

export { ingredientData, handleSubmitIngredient }