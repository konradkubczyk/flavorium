// src/stores/myStore.ts
import { writable } from 'svelte/store';

// Define the type for the store    
//type nameType = string[];

// Initialize the store with an empty array
//const names = writable<nameType>([]);

// interface Name {
//     text: string;
//     id: number;
// }

// const names = writable(new Array<Name>());

interface Recipe {
    name?: string;
    description?: string;
    ingredients?: string[];
    steps?: string[];
    isVegan?:boolean;
    type?:string;
    subType?:string;

}

const recipeStore = writable(new Array<Recipe>());

export { recipeStore };
