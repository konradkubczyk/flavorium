// src/stores/myStore.ts
import { writable } from 'svelte/store';

// Define the type for the store
type nameType = string[];

// Initialize the store with an empty array
const names = writable<nameType>([]);

export default names;
