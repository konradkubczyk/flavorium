import { writable } from 'svelte/store';

const names = writable([]);

const recipes = writable([]);

export default { names, recipes};
