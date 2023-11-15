// src/stores/myStore.ts
import { writable } from 'svelte/store';

// Define the type for the store    
//type nameType = string[];

// Initialize the store with an empty array
//const names = writable<nameType>([]);



//const names= writable<string[]>([]);  TO DZIŁAŁO JAKOŚ
//TODO ZROBIĆ ŻEBY TUTAJ NIE BYŁO WARTOŚĆI POCZĄTKOWYCH 
const names= writable([{text:"",id:0}]);


export default names;
